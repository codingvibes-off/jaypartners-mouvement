// Retourne la valeur seulement si c'est une chaîne non vide, sinon undefined. Les paramètres
// de requête et le corps JSON peuvent contenir des objets ou des tableaux : passés tels quels
// à Prisma, ils deviendraient des opérateurs de filtre (ex: ?niveau[not]=x) ou feraient planter
// la requête.
function texte(valeur, longueurMax = 200) {
  if (typeof valeur !== "string" || !valeur || valeur.length > longueurMax) return undefined;
  return valeur;
}

module.exports = { texte };
