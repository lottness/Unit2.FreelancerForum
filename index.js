const freelancers = [
    { name: "April", price: 53, occupation: "gardener" },
    { name: "Renee", price: 12, occupation: "programmer" },
    { name: "Justin", price: 27, occupation: "teacher" },
    { name: "Calvin", price: 21, occupation: "teacher" },
    { name: "Rey", price: 73, occupation: "teacher" },
    { name: "Augustus", price: 25, occupation: "programmer" },
    { name: "Tammy", price: 85, occupation: "teacher" },
    { name: "Ralph", price: 78, occupation: "driver" },
    { name: "Brock", price: 92, occupation: "illustrator" },
  ];
  
 
//Function to calculate the average starting price of the freelancers' array?
//forEach
//reduce method on freelancers array. 
//returns sum of all prices/length of freelancers array. --> round to 2 decimal places too.
  
  const averagePrice = (freelancers) => {
    const sumAllPrices = freelancers.reduce((acc, userInfo) => acc += userInfo.price, 0);
    return (sumAllPrices/ freelancers.length).toFixed(2);
  }
  
  
  //make the top/header section of page
  
  const body = document.body;
  
  const h1 = document.createElement("h1");
  h1.textContent = "Freelancer Forum";
  body.appendChild(h1);
  
  const p = document.createElement("p");
  p.textContent = `The average starting price is $${averagePrice(freelancers)}`;
  body.appendChild(p);
  
  const h2 = document.createElement("h2")
  h2.textContent = "Available Freelancers";
  body.appendChild(h2);
  
 //make the "chart" section of the lower half of the webpage
  
  const bigArticle = document.createElement("article");
  body.appendChild(bigArticle);
  
  //make the containers for the freelancer info table
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  
  //place the divs for the freelancer info in the bigArticle
  bigArticle.appendChild(div1);
  bigArticle.appendChild(div2);
  bigArticle.appendChild(div3);
  
  //make a function to get info from freelancer array to plug into the arrays as HTML
  //Reference on the web: https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML
  //because it would be repetitive to have to make a zillion <li> elements in 3 unordered lists
  
  const freelanceInfoMaker = (freelancer, key) => {
    let htmlInfoString = `<div><h3>${key}</h3>`;
    if (key === "price") freelancer.forEach(element => htmlInfoString += `<p>$${element[key]}</p>`);
    else freelancer.forEach(element => htmlInfoString += `<p>${element[key]}</p>`);
    return htmlInfoString + `</div>`;
  }
  
  //now use the function above to put in that text
  div1.outerHTML = freelanceInfoMaker(freelancers, "name");
  div2.outerHTML = freelanceInfoMaker(freelancers, "occupation");
  div3.outerHTML = freelanceInfoMaker(freelancers, "price");
  
  /////////
  //STYLIN'
  body.setAttribute("style", "background-color: #EEEEEE; font-family: futura, helvetica, sans-serif; text-align: center; display: flex; align-items: center; flex-direction: column;");
  
  h1.style.fontSize = "2.5em";
  
  bigArticle.setAttribute("style", "display: flex;flex-wrap: nowrap;flex-direction: row;justify-content: center;align-items: flex-start; border: 2px solid blue; width: 70%; min-width: 550px;")
  
  const allDivs = document.querySelectorAll("div");
  allDivs.forEach(div => div.setAttribute("style", "width: 30%; max-width: 200px; margin: 3%; text-align: center;"));
  