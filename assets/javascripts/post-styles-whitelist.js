(function () {

  // figures
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*one-quarter\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*one-third\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*one-half\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*two-thirds\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*three-quarters\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*right\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*end-of-row\s*$/);

  // one-quarter
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(one-quarter|right)\s+(right|one-quarter)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(one-quarter|end-of-row)\s+(one-quarter|end-of-row)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(one-quarter|end-of-row|right)\s+(one-quarter|end-of-row|right)\s+(one-quarter|end-of-row|right)\s*$/);

  // one-third
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(one-third|right)\s+(right|one-third)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(one-third|end-of-row)\s+(one-third|end-of-row)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(one-third|end-of-row|right)\s+(one-third|end-of-row|right)\s+(one-third|end-of-row|right)\s*$/);

  // one-half
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(one-half|right)\s+(right|one-half)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(one-half|end-of-row)\s+(one-half|end-of-row)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(one-half|end-of-row|right)\s+(one-half|end-of-row|right)\s+(one-half|end-of-row|right)\s*$/);

  // two-thirds
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(two-thirds|right)\s+(right|two-thirds)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(two-thirds|end-of-row)\s+(two-thirds|end-of-row)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(two-thirds|end-of-row|right)\s+(two-thirds|end-of-row|right)\s+(two-thirds|end-of-row|right)\s*$/);

  // three-quarters
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(three-quarters|right)\s+(right|three-quarters)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(three-quarters|end-of-row)\s+(three-quarters|end-of-row)\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(three-quarters|end-of-row|right)\s+(three-quarters|end-of-row|right)\s+(three-quarters|end-of-row|right)\s*$/);

  // divs
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*one-quarter\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*one-third\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*one-half\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*two-thirds\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*three-quarters\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*right\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*end-of-row\s*$/);

  // one-quarter
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(one-quarter|right)\s+(right|one-quarter)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(one-quarter|end-of-row)\s+(one-quarter|end-of-row)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(one-quarter|end-of-row|right)\s+(one-quarter|end-of-row|right)\s+(one-quarter|end-of-row|right)\s*$/);

  // one-third
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(one-third|right)\s+(right|one-third)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(one-third|end-of-row)\s+(one-third|end-of-row)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(one-third|end-of-row|right)\s+(one-third|end-of-row|right)\s+(one-third|end-of-row|right)\s*$/);

  // one-half
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(one-half|right)\s+(right|one-half)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(one-half|end-of-row)\s+(one-half|end-of-row)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(one-half|end-of-row|right)\s+(one-half|end-of-row|right)\s+(one-half|end-of-row|right)\s*$/);

  // two-thirds
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(two-thirds|right)\s+(right|two-thirds)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(two-thirds|end-of-row)\s+(two-thirds|end-of-row)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(two-thirds|end-of-row|right)\s+(two-thirds|end-of-row|right)\s+(two-thirds|end-of-row|right)\s*$/);

  // three-quarters
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(three-quarters|right)\s+(right|three-quarters)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(three-quarters|end-of-row)\s+(three-quarters|end-of-row)\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(three-quarters|end-of-row|right)\s+(three-quarters|end-of-row|right)\s+(three-quarters|end-of-row|right)\s*$/);

  Discourse.Markdown.whiteListTag('hr', 'class', 'clear');
})();