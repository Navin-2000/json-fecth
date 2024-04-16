async function k(){
    var result=document.getElementById("ui")
    result.className="naveen";
    var url=await fetch("https://jsonplaceholder.typicode.com/photos")
    var s=await url.json()
     s.map((navin)=>{
        var div=document.createElement("div")
        div.className="d"
        result.appendChild(div)
        var id=document.createElement("p")
        id.innerText=navin.id
        result.appendChild(id)
        div.appendChild(id)
        var img=document.createElement("img")
        img.className="zzz"
        img.src=navin.url
        result.appendChild(img)
        div.appendChild(img) 
        var st=document.createElement("p")
        st.innerText=navin.title
        result.appendChild(st)
        div.appendChild(st)
        var rap=document.createElement("div")
        rap.className="r"
        result.appendChild(rap)
        div.appendChild(rap) 
    })
}
k();