function showdemo(week) {
  const p = document.querySelector('.show-classdemo');
  console.log('p', p);
  switch (week) {
   
    case 'project':
      p.innerHTML = `<iframe src="./project_23/products_supa_23.html" width="100%" height="100%" />`;
      break;
  }
}
