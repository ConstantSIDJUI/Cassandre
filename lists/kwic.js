function(head, req) {
  // !json templates.kwic
  // !code lib/mustache.js
  // !code l10n/l10n.js
  start({"headers":{"Content-Type":"text/html;charset=utf-8"}});
  var parameters = req.query.startkey;
  var data = {
    i18n: localized(),
    corpus: parameters[0],
    pattern: parameters[1],
    occurrences: []
  };
  while (row = getRow()) {
    data.occurrences.push({
      corpus: row.key[0],
      id: row.id,
      before: row.value.before,
      match: row.key[1]
    });
  }
  return Mustache.to_html(templates.kwic, data);
}
