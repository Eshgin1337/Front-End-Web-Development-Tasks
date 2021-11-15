document.getElementById('button1').addEventListener('click', getTodos)
// document.getElementById('button2').addEventListener('click', addTodos)


    // axios.get("https://jsonplaceholder.typicode.com/todos")
    // .then(function (res) {
    //     console.log(res);
    //     return res.data;
    // })
    // .then(function (data) {
    //     let output = '';
    //     data.forEach(function (element) {
    //         output += `<p>${element.title}</p>`
    //     });
    //     document.getElementById('output').innerHTML = output;
    // })
    // .catch(function (err) {
    //     console.log(err);
    // })
    // async function getTodos() {
    //     try {
    //         await axios.get('https://jsonplaceholder.typicode.com/todos')
    //         .then(function (res) {
    //             console.log(res);
    //             return res.data;
    //         })
    //         .then(function (data) {
                // let output = '';
                // data.forEach(function (element) {
                //     output += `<p>${element.title}</p>`
                // });
                // document.getElementById('output').innerHTML = output;
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


async function getTodos() {
  try {
    const response = await axios.get('ttps://jsonplaceholder.typicode.com/todos');
    let output = '';
    response.data.forEach(function (element) {
        output += `<p>${element.title}</p>`
    });
    document.getElementById('output').innerHTML = output;
  } catch (error) {
    console.error(error);
  }
}
