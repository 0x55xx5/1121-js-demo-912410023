function showdemo(week) {
    const p = document.querySelector('.show-classdemo');
    console.log('p', p);
    switch (week) {
        case 2:
            p.innerHTML = `<iframe src="./demo/W02_23/index.html" width="100%" height="100%" />`;
            break;

        case 3:
            p.innerHTML = `<iframe src="./demo/W03_23/index.html" width="100%" height="100%" />`;
            break;
        case 4:
            p.innerHTML = `<iframe src="./demo/W04_23/index.html" width="100%" height="100%" />`;
            break;

        case 5:
            p.innerHTML = `<iframe src="./demo/W05_23/index.html" width="100%" height="100%" />`;
            break;
        case 6:
            p.innerHTML = `<iframe src="./demo/W06_23/index.html" width="100%" height="100%" />`;
            break;
        case 7:
            p.innerHTML = `<iframe src="./demo/w07_23/index.html" width="100%" height="100%" />`;
            break;
        case 8:
            p.innerHTML = `<iframe src="../demo/index.html" width="100%" height="100%" />`;
            break;
        case '1122w1':
            p.innerHTML = `<iframe src="./week1/index.html" width="100%" height="100%" />`;
            break;
        case '1122w2':
            p.innerHTML = `<iframe src="./week2/index.html" width="100%" height="100%" />`;
            break;
        case '1122w3p1':
            p.innerHTML = `<iframe src="./week03/p1/index.html" width="100%" height="100%" />`;
            break;
        case '1122w3p2':
            p.innerHTML = `<iframe src="./week03/p2/index.html" width="100%" height="100%" />`;
            break;
        case '1122w3p3':
            p.innerHTML = `<iframe src="./week03/p3/index.html" width="100%" height="100%" />`;
            break;
        case '1122w4p4':
            p.innerHTML = `<iframe src="./week4/p4/index.html" width="100%" height="100%" />`;
            break;
        case '1122w4p5':
            p.innerHTML = `<iframe src="./week4/p5/index.html" width="100%" height="100%" />`;
            break;
        case '1122w4p6':
            p.innerHTML = `<iframe src="./week4/p6/index.html" width="100%" height="100%" />`;
            break;
    }
}