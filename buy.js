/* Code for buy page */
const sport = {
    name: 'Sport RC-Car',
    frame_color: 'Red',
    prefix: '357901',
    start_number: 9753,
    price: 239.99
}

const suv = {
    name: 'Suv RC-Car',
    frame_color: 'Black',
    prefix: '642852',
    start_number: 8647,
    price: 210.99
}

const classic = {
    name: 'Classic RC-Car',
    frame_color: 'Red',
    prefix: '315790',
    start_number: 7326,
    price: 599.99
}

const atv = {
    name: 'ATV RC-Car',
    frame_color: 'Blue',
    prefix: '113342',
    start_number: 8488,
    price: 349.99
}

const dunebuggy = {
    name: 'Dunebuggy RC-Car',
    frame_color: 'White',
    prefix: '885532',
    start_number: 7446,
    price: 449.99
}

const crawlers = {
    name: 'Crawler RC-Car',
    frame_color: 'Blue',
    prefix: '756643',
    start_number: 3398,
    price: 299.99
}

const custom = {
    gold_shell: 299.99,
    big_wheels: 98.99,
    white_tires: 59.98
}

const tax = 0.07;
let total = 0;
let tax_amount = 0;

let color_style = document.getElementById('rc-car-section');
let custom_label = document.getElementById('custom-label');
let custom_section = document.getElementById('custom-options');
let purchase = document.getElementById('btn-purchase');
let order = document.getElementById('order-show');







function changeImage() {
    let img_sel = document.getElementById('rc-car-style').value;
    let img_src = '/images/' + img_sel + '.png';

    const img = document.getElementById('rc-car');
    img.src = img_src;

    displayElement(color_style, 'inline');
    displayElement(custom_label, 'block'); 
    displayElement(custom_section, 'flex');
}

window.onload = function () {
    displayElement(color_style, 'none');
    displayElement(order, 'none');
    displayElement(custom_label, 'none');
    displayElement(custom_section, 'none');
    displayElement(purchase, 'none');
}

function displayElement(my_element, type) {
    my_element.style.display = type;
}

function addOrder(car) {
    displayElement(order, 'flex');
    document.getElementById('rec-rc-car').innerHTML = car.name;
    document.getElementById('rec-rc-car-price').innerHTML = '$'+car.price;
    total = car.price;

    document.getElementById('rec-color').innerHTML = 'Frame color: '+car.frame_color;
    let price_color;
    if(car.shell_color == 'Red'){
        price_color = custom.red_shell; 
    } else {
        price_color = 0;
    }
    total += price_color;
    document.getElementById('rec-color-price').innerHTML = '$'+price_color;
    document.getElementById('rec-serial').innerHTML = 'Serial #'+car.prefix + (++car.start_number);

    calculateSub();

}

function calculateSub () {
    document.getElementById('rec-subtotal').innerHTML = '$'+total;
    calculateTax();
    calculateTotal();
}

function calculateTax() {
    tax_amount = (total * tax).toFixed(2);
    document.getElementById('rec-tax').innerHTML = '$'+tax_amount;
}

function calculateTotal() {
    let finished = total + Number.parseFloat(tax_amount);
    document.getElementById('rec-total').innerHTML = '$'+finished.toFixed(2);
}

function updateOrder() {
    let car = document.getElementById('car-style').value;
    let color = document.getElementById('car-color-style').value;
    switch(car) {
        case 'sport':
            sport['frame_color'] = color;
            addOrder(sport);
            break;
            case 'suv':
             suv['frame_color'] = color;
             addOrder(suv);
             break;
             case 'classic':
             classic['frame_color'] = color;
             addOrder(classic);
             break;
             case 'atv':
             atv['frame_color'] = color;
             addOrder(atv);
             break;
             case 'dunebuggy':
             dunebuggy['frame_color'] = color;
             addOrder(dunebuggy);
             break;
             case 'crawlers':
             crawlers['frame_color'] = color;
             addOrder(crawlers);
             break;



     }
    displayElement(purchase, 'inline');
}

function customTires() {
    let tire = document.querySelector('#wt-tires');

    if(tire.checked) {
        document.getElementById('rec-tires').innerHTML = tire.value;
        document.getElementById('rec-tires-price').innerHTML = custom.white_tires;
    } else {
        document.getElementById('rec-tires').innerHTML = '';
        document.getElementById('rec-tires-price').innerHTML = '';
        total -= custom.white_tires;
    }
    calculateSub();
}

function customshell() {
    let shell = document.querySelector('#wt-shell');
    if(shell.checked) {
        document.getElementById('rec-shell').innerHTML = shell.value;
        total += custom.shell;
    } else {
        document.getElementById('rec-shell').innerHTML = '';
        document.getElementById('rec-shell-price').innerHTML = '';
        total -= custom.shell;
    }
    calculateSub();
}

function customwheels() {
    let wheels = document.querySelector('#wt-wheels');
    if(wheels.checked) {
        document.getElementById('rec-wheels').innerHTML = wheels.value;
        document.getElementById('rec-wheels-price').innerHTML = custom.wheels;
        total += custom.wheels;
    } else {
        document.getElementById('rec-wheels').innerHTML = '';
        document.getElementById('rec-wheels-price').innerHTML = '';
        total -= custom.wheels;
    }
    calculateSub();
}

function reserveOrder() {
    let step1 = 'All tires will be aired up.';
    let step2 = 'We will have your car assembled and test driven.';
    let step3 = 'The shell will be washed after the test drive.';
    alert('Your car is been reserved. We will notify you when it is ready to be picked up.\n' +
     step1 + '\n' + step2 + '\n' + step3);

}

const tax = 0.07;
let total = 0;
let tax_amount = 0;

let color_style = document.getElementById('bike-section');
let custom_label = document.getElementById('custom-label');
let custom_section = document.getElementById('custom-options');
let purchase = document.getElementById('btn-purchase');
let order = document.getElementById('order-show');







function changeImage() {
    let img_sel = document.getElementById('bike-style').value;
    let img_src = '/images/' + img_sel + '.png';

    const img = document.getElementById('bike');
    img.src = img_src;

    displayElement(color_style, 'inline');
    displayElement(custom_label, 'block'); 
    displayElement(custom_section, 'flex');
}

window.onload = function () {
    displayElement(color_style, 'none');
    displayElement(order, 'none');
    displayElement(custom_label, 'none');
    displayElement(custom_section, 'none');
    displayElement(purchase, 'none');
}

function displayElement(my_element, type) {
    my_element.style.display = type;
}

function addOrder(bike) {
    displayElement(order, 'flex');
    document.getElementById('rec-bike').innerHTML = bike.name;
    document.getElementById('rec-bike-price').innerHTML = '$'+bike.price;
    total = bike.price;

    document.getElementById('rec-color').innerHTML = 'Frame color: '+bike.frame_color;
    let price_color;
    if(bike.frame_color == 'Gold'){
        price_color = custom.gold_frame; 
    } else {
        price_color = 0;
    }
    total += price_color;
    document.getElementById('rec-color-price').innerHTML = '$'+price_color;
    document.getElementById('rec-serial').innerHTML = 'Serial #'+bike.prefix + (++bike.start_number);

    calculateSub();

}

function calculateSub () {
    document.getElementById('rec-subtotal').innerHTML = '$'+total;
    calculateTax();
    calculateTotal();
}

function calculateTax() {
    tax_amount = (total * tax).toFixed(2);
    document.getElementById('rec-tax').innerHTML = '$'+tax_amount;
}

function calculateTotal() {
    let finished = total + Number.parseFloat(tax_amount);
    document.getElementById('rec-total').innerHTML = '$'+finished.toFixed(2);
}

function updateOrder() {
    let bike = document.getElementById('bike-style').value;
    let color = document.getElementById('bike-color-style').value;
    switch(bike) {
        case 'crosscountry':
            cross_country['frame_color'] = color;
            addOrder(cross_country);
            break;
            case 'downhill':
             downhill['frame_color'] = color;
             addOrder(downhill);
             break;
             case 'touring':
             touring['frame_color'] = color;
             addOrder(touring);
             break;
             case 'vintage':
             vintage['frame_color'] = color;
             addOrder(vintage);
             break;

     }
    displayElement(purchase, 'inline');
}

function customTires() {
    let tire = document.querySelector('#wt-tires');

    if(tire.checked) {
        document.getElementById('rec-tires').innerHTML = tire.value;
        document.getElementById('rec-tires-price').innerHTML = custom.white_tires;
    } else {
        document.getElementById('rec-tires').innerHTML = '';
        document.getElementById('rec-tires-price').innerHTML = '';
        total -= custom.white_tires;
    }
    calculateSub();
}

function customGrips() {
    let grips = document.querySelector('#wt-grips');
    if(grips.checked) {
        document.getElementById('rec-grips').innerHTML = grips.value;
        total += custom.leather_grips;
    } else {
        document.getElementById('rec-grips').innerHTML = '';
        document.getElementById('rec-grips-price').innerHTML = '';
        total -= custom.leather_grips;
    }
    calculateSub();
}

function customSeat() {
    let seat = document.querySelector('#wt-seat');
    if(seat.checked) {
        document.getElementById('rec-seat').innerHTML = seat.value;
        document.getElementById('rec-seat-price').innerHTML = custom.leather_seat;
        total += custom.leather_seat;
    } else {
        document.getElementById('rec-seat').innerHTML = '';
        document.getElementById('rec-seat-price').innerHTML = '';
        total -= custom.leather_seat;
    }
    calculateSub();
}

function reserveOrder() {
    let step1 = 'All tires will be aired up and set to correct psi';
    let step2 = 'We will have your bike assembled and test ridden.';
    let step3 = 'The frame will be washed after the test ride.';
    alert('Your bike is been reserved. We will notify you when it is ready to be picked up.\n' +
     step1 + '\n' + step2 + '\n' + step3);

}