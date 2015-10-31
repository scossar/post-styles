Discourse.Utilities.getUploadMarkdown = function(upload) {
    if (Discourse.Utilities.isAnImage(upload.original_filename)) {
      return '<figure><img src="' + upload.url + '" width="' + upload.width + '" height="' + upload.height + '"><figcaption></figcaption></figure>';
    } else {
      return '<a class="attachment" href="' + upload.url + '">' + upload.original_filename + '</a> (' + I18n.toHumanSize(upload.filesize) + ')';
    }
  };