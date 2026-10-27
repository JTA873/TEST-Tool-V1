"""Génère les 4 fichiers HTML autonomes à partir de src/template.html et src/data.js."""
import pathlib

root = pathlib.Path(__file__).parent
tpl = (root / "src" / "template.html").read_text(encoding="utf-8")
data = (root / "src" / "data.js").read_text(encoding="utf-8")

titres = {"synthese": "Synthèse planning", "suivi": "Suivi des opérations"}
for lot in (1, 2):
    for vue in ("synthese", "suivi"):
        html = (tpl.replace("/*__DATA__*/", data)
                   .replace("/*__CFG__*/", '{ lot: %d, vue: "%s" }' % (lot, vue))
                   .replace("__TITLE__", "LNPCA – Lot %d – %s" % (lot, titres[vue])))
        (root / ("lot%d-%s.html" % (lot, vue))).write_text(html, encoding="utf-8")
        print("généré : lot%d-%s.html" % (lot, vue))
