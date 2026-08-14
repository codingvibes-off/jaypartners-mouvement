const API_BASE = "https://api.cloudflare.com/client/v4";

function config() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_STREAM_API_TOKEN;
  if (!accountId || !apiToken) {
    throw new Error(
      "CLOUDFLARE_ACCOUNT_ID et CLOUDFLARE_STREAM_API_TOKEN doivent être définis dans .env"
    );
  }
  return { accountId, apiToken };
}

async function appelCloudflare(path, options = {}) {
  const { accountId, apiToken } = config();
  const res = await fetch(`${API_BASE}/accounts/${accountId}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${apiToken}`,
      ...(options.headers || {}),
    },
  });
  const data = await res.json();
  if (!res.ok || !data.success) {
    const message = data.errors?.[0]?.message || "Erreur API Cloudflare Stream";
    throw new Error(message);
  }
  return data.result;
}

async function creerUploadDirect() {
  const result = await appelCloudflare("/stream/direct_upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ maxDurationSeconds: 3600 }),
  });
  return { uploadURL: result.uploadURL, uid: result.uid };
}

async function obtenirStatut(uid) {
  const result = await appelCloudflare(`/stream/${uid}`);
  const etat = result.status?.state; // "pendingupload" | "downloading" | "queued" | "inprogress" | "ready" | "error"
  let statut = "uploading";
  if (etat === "ready") statut = "ready";
  else if (etat === "error") statut = "error";
  return { statut, thumbnail: result.thumbnail, duree: result.duration };
}

module.exports = { creerUploadDirect, obtenirStatut };
