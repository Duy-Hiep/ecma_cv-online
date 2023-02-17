function loadScrip(src){
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");//<script>
        script.src = src; //<script src="https://javascript.info/callbacks"></script>
        script.onload = () => resolve(10);
        script.onerror = () => reject(new Error("Load script failed"));
        document.head.append(script); //<head> <script src="https://javascript.info/callbacks"></script> </head>
    })
}


loadScrip("https://javascript.info/callbacks")
   .then((data) => data + 10)
   .then((data2) => console.log(data2))
   .then((error) => console.log(error));