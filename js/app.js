// your code

const pictures = [
    'contBcg-0',
    'contBcg-1',
    'contBcg-2',
    'contBcg-3',
    'contBcg-4',
  ];
  const carNames = [
    'Mercedes AMG',
    'Mercedes E Class',
    'BMW',
    'AUDI',
    'Dodge Challenger',
  ];
  
    const playBtn = document.querySelector('#playBtn');
    const stopBtn = document.querySelector('#stopBtn');
    const carName = document.querySelector('.car-name');
    const backImage = document.querySelector('.img-container');
    carName.textContent = carNames[0];
  
    let counter = 0;

    playBtn.addEventListener('click', setInterval(() => {
      counter++;
      if(counter > pictures.length-1){
        counter = 0;
      }
      backImage.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      carName.textContent = carNames[counter];
      }, 1500)
    )

    stopBtn.addEventListener('click', clearInterval())

    // let counter2 = 0;
    // const buttons = document.querySelectorAll('.btn');
    // buttons.addEventListener('click', (event) => {
    //     if (event.('#icon-left')) {
    //         counter2--;
    //         if(counter > pictures.length-1){
    //             counter = 0;
    //           }
    //         backImage.style.backgroundImage = `url('./img/${pictures[counter2]}.jpeg')`
    //         carName.textContent = carNames[counter2];
    //     }
    //     if (document.querySelector('#icon-right')) {
    //         counter2++;
    //         if(counter > pictures.length-1){
    //             counter = 0;
    //           }
    //         backImage.style.backgroundImage = `url('./img/${pictures[counter2]}.jpeg')`
    //         carName.textContent = carNames[counter2];
    //     }

    // })