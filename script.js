const nav = document.querySelector('.navbar')
fetch('./navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
    const parser = new DOMParser()
    parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})


