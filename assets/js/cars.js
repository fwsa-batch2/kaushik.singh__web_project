
function cars(img) {
    document.querySelector('.luxury-car').src = img;

    switch (img) {
        case "../assets/logo/Ford_logo.jpeg":
            document.getElementById('car_show').src = "../../assets/images/Ford_mus-gt.png";
            document.getElementById('company-title').innerHTML = `<h2>Ford..</h2>`;
            document.getElementById('decription').innerText = "  Ford Motor Company is an American multinational automobile manufacturer headquartered in Dearborn, Michigan, United States. It was founded by Henry Ford and incorporated on June 16, 1903. The company sells automobiles and commercial vehicles under the Ford brand, and luxury cars under its Lincoln luxury brand.";
            document.getElementById('viedcars').href = "./../../pages/Ford.html";
            document.getElementById('readmore').href = "https://www.india.ford.com/";
            break;
        case "../assets/logo/Lamborghini-logo.png":
            document.getElementById('car_show').src = "../../assets/images/lamborghini-car.png";
            document.getElementById('company-title').innerHTML = `<h2>Lamborghini..</h2>`;
            document.getElementById('decription').innerText = "Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.";
            document.getElementById('viedcars').href = "../../pages/lambrghini.html";
            document.getElementById('readmore').href = "https://www.lamborghini.com/en-en";
            break;
        case "../assets/logo/audi-logo.png":
            document.getElementById('car_show').src = "../../assets/images/audi-car.png";
            document.getElementById('company-title').innerHTML = `<h2>Audi..</h2>`;
            document.getElementById('decription').innerText = "Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. As a subsidiary of its parent company, the Volkswagen Group, Audi produces vehicles in nine production facilities worldwide.";
            document.getElementById('viedcars').href = "../../pages/Audi.html";
            document.getElementById('readmore').href = "https://www.audi.com/en.html";
            break;
        case "../assets/logo/bentley-logo.png":
            document.getElementById('car_show').src = "../../assets/images/Bentley-car.png";
            document.getElementById('company-title').innerHTML = `<h2>Bentley..</h2>`;
            document.getElementById('decription').innerText = "Bentley Motors Limited is a British manufacturer and marketer of luxury cars and SUVs, and a subsidiary of the Volkswagen Group since 1998. Headquartered in Crewe, England, the company was founded as Bentley Motors Limited by W. O.";
            document.getElementById('viedcars').href = "../../pages/Bentley.html";
            document.getElementById('readmore').href = "https://www.bentleymotors.com/en.html";
            break;  
        case "../assets/logo/Benze-logo.png":
            document.getElementById('car_show').src = "../../assets/images/benze-car.png";
            document.getElementById('company-title').innerHTML = `<h2>Mercedes benz..</h2>`;
            document.getElementById('decription').innerText = "Mercedes-Benz, commonly referred to as just Mercedes, is a German luxury automotive marque. Mercedes-Benz and subsidiary Mercedes-Benz AG – of Daimler AG – are headquartered in Stuttgart, Baden-Württemberg, Germany. Mercedes-Benz produces consumer luxury vehicles and commercial vehicles.";
            document.getElementById('viedcars').href = "../../pages/Benz.html";
            document.getElementById('readmore').href = "https://www.mercedes-benz.com/en/";
            break;      
        case "../assets/logo/bmw-logo.png":
            document.getElementById('car_show').src = "../../assets/images/bmw-car.png";
            document.getElementById('company-title').innerHTML = `<h2>Bmw..</h2>`;
            document.getElementById('decription').innerText = "Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.";
            document.getElementById('viedcars').href = "../../pages/bmw_cars.html";
            document.getElementById('readmore').href = "https://www.bmwgroup.com/en.html";
            break;
        case "../assets/logo/mg_logo.png":
            document.getElementById('car_show').src = "../../assets/images/mg-car.png";
            document.getElementById('company-title').innerHTML = `<h2>MG..</h2>`;
            document.getElementById('decription').innerText = "MG is a British automotive marque founded by Cecil Kimber in the 1920s, and M.G. Car Company Limited was the British sports car manufacturer that made the marque famous. Best known for its open two-seater sports cars, MG also produced saloons and coupés, with engines up to three litres in size.";
            document.getElementById('viedcars').href = "../../pages/MG.html";
            document.getElementById('readmore').href = "https://www.mgmotor.co.in/";
            break;
        default:
            document.getElementById('car_show').src = "../../assets/images/rolls-rolys_panthom.png";
            document.getElementById('company-title').innerHTML = "<h2>Rolls-Royce..</h2>";
            document.getElementById('decription').innerText = "  Rolls-Royce Motor Cars Limited is a British luxury automobile maker. Rolls-Royce Motor Cars Limited operates from purpose-built administrative and production facilities opened in 2003 across from the    historic Goodwood Circuit in Goodwood, West Sussex, England, United Kingdom.";
            document.getElementById('viedcars').href = "./../../pages/rolls-royce_car.htm";
            document.getElementById('readmore').href = "https://www.rolls-roycemotorcars.com/en_GB/home.html";


    }
}