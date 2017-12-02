// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  let type = '';
  let subType = '';
  if (extension == 'html' || extension == 'css') {
    type = 'text';
    subType = extension;
  } else if (extension == 'jpeg' || extension == 'jpg') {
    type = 'image';
    subType = 'jpeg';
  } else {
    type = 'text';
    subType = 'plain'
  }
  return (type + '/' + subType);
}
