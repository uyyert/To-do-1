const colors = ['#C71585', '#00FF7F', '#DC143C', '#4682B4', '#FFD700', '#EE82EE']
var lenght = 0;
const array = new Array(lenght)
function arrayRandElement(colors) {
  const rand = Math.floor(Math.random() * colors.length);
  return colors[rand];
}

  function addRow(id){
    console.log(id);
    const value = document.getElementById('myText').value;
    console.log(value);
    const tbody = document.getElementById('myTable').getElementsByTagName("TBODY")[0];
    const row = document.createElement("TR");
    const test = arrayRandElement(colors);
    row.style["background-color"]=test;
    const td1 = document.createElement("INPUT")
    td1.setAttribute("type", "checkbox")

    //td1.id = 'b22'
   // const abcElements = document.querySelectorAll('[id=b22]');
    //for (var i = 0; i < abcElements.length; i++)

   //   td1.id = 'b22-'+i;

   // console.log(i)

  //  console.log(td1);

    //const list = [



    //while (lenght--){
    //       array[lenght] = ttk;

    //}





    const td2 = document.createElement("TD")
    td2.appendChild (document.createTextNode(value))
    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row);
    document.getElementById('INPUT')
    document.getElementById('myText').value = "";



    const ttk = `f${(~~(Math.random()*1e8)).toString(16)}`;
    //td1.id = ttk;
    row.id = ttk;
    console.log(td1);


    array.push(ttk);
    console.log(array)


  }

  function ChangeRow1() {
    console.log(array[0])
    for (var j = 0; j < 5; j++) {
      const g = document.getElementById(array[j])
      const f = document.getElementById(array[j]).childNodes [0]
      console.log(f);
      console.log(g);
      if (f.checked == true) {
        g.style["background-color"] = '#C71585';
      }
    }
  }
    function ChangeRow2() {
      console.log(array[0])
      for (var j = 0; j < 5; j++) {
        const g = document.getElementById(array[j])
        const f = document.getElementById(array[j]).childNodes [0]
        console.log(f);
        console.log(g);
        if (f.checked == true) {
          g.style["background-color"] = '#00FF7F';
        }
      }
    }
      function ChangeRow3() {
        console.log(array[0])
        for (var j = 0; j < 5; j++) {
          const g = document.getElementById(array[j])
          const f = document.getElementById(array[j]).childNodes [0]
          console.log(f);
          console.log(g);
          if (f.checked == true) {
            g.style["background-color"] = '#DC143C';
          }
        }
      }
        function ChangeRow4() {
          console.log(array[0])
          for (var j = 0; j < 5; j++) {
            const g = document.getElementById(array[j])
            const f = document.getElementById(array[j]).childNodes [0]
            console.log(f);
            console.log(g);
            if (f.checked == true) {
              g.style["background-color"] = '#4682B4';
            }
          }
        }
          function ChangeRow5() {
            console.log(array[0])
            for (var j = 0; j < 5; j++) {
              const g = document.getElementById(array[j])
              const f = document.getElementById(array[j]).childNodes [0]
              console.log(f);
              console.log(g);
              if (f.checked == true) {
                g.style["background-color"] = '#FFD700';
              }
            }
          }
            function ChangeRow6() {
              console.log(array[0])
              for (var j = 0; j < 5; j++) {
                const g = document.getElementById(array[j])
                const f = document.getElementById(array[j]).childNodes [0]
                console.log(f);
                console.log(g);
                if (f.checked == true) {
                  g.style["background-color"] = '#EE82EE';
                }
              }
            }






  function ColorRow(name) {
    console.log(name);
    // if else
  const value = document.getElementByName('color').value;

    const test2 = value
    row.style["background-color"]=test2;
    document.getElementById(myTable).style.backgroundColor=test2;
  }

  //инклимацция айдишников чекбоксов, перебор запись в массив нажатых, все нажатые в новый массив меняим им цвета, прикручиываем функцию к каждой кнопке
//ttk передаем под радиобатоны, которые проверяют нажатые и меняют цвет в соответсвиии  с кнопкой
// по очереди красить

//классы вместо инпута для css