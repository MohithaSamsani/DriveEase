console.log("Car Rental System loaded successfully!");


// =================================
// CAR DATA
// =================================

const cars = {

    swift: {
        name: "Maruti Swift",
        type: "HATCHBACK",
        description: "A comfortable and practical hatchback suitable for city travel, short trips and everyday journeys.",
        price: "₹1,500",
        image: "../images/swift.jpg",
        seats: "5",
        fuel: "Petrol",
        transmission: "Manual",
        ac: "Yes",
        eco: "Fuel-efficient option suitable for everyday travel."
    },

    creta: {
        name: "Hyundai Creta",
        type: "SUV",
        description: "A spacious SUV designed for comfortable city travel, family trips and longer journeys.",
        price: "₹2,500",
        image: "../images/creta.jpg",
        seats: "5",
        fuel: "Petrol",
        transmission: "Automatic",
        ac: "Yes",
        eco: "Efficient choice for comfortable everyday and family travel."
    },

    city: {
        name: "Honda City",
        type: "SEDAN",
        description: "A stylish sedan offering a comfortable interior and a smooth driving experience.",
        price: "₹2,200",
        image: "../images/city.jpg",
        seats: "5",
        fuel: "Petrol",
        transmission: "Automatic",
        ac: "Yes",
        eco: "Fuel-efficient option suitable for regular city travel."
    },

    innova: {
        name: "Toyota Innova",
        type: "MPV",
        description: "A spacious vehicle suitable for families and group journeys with comfortable seating.",
        price: "₹3,000",
        image: "../images/innova.jpg",
        seats: "7",
        fuel: "Diesel",
        transmission: "Manual",
        ac: "Yes",
        eco: "Long-range option suitable for family and group travel."
    },

    "nexon-ev": {
        name: "Tata Nexon EV",
        type: "ELECTRIC SUV",
        description: "An electric SUV that combines practical space with an electric driving experience.",
        price: "₹2,800",
        image: "../images/nexon-ev.jpg",
        seats: "5",
        fuel: "Electric",
        transmission: "Automatic",
        ac: "Yes",
        eco: "Electric vehicle designed to support cleaner transportation."
    },

    "camry-hybrid": {
        name: "Toyota Camry Hybrid",
        type: "HYBRID SEDAN",
        description: "A comfortable hybrid sedan designed for smooth travel with a balance of performance and efficiency.",
        price: "₹3,500",
        image: "../images/camry-hybrid.jpg",
        seats: "5",
        fuel: "Hybrid",
        transmission: "Automatic",
        ac: "Yes",
        eco: "Hybrid technology helps improve fuel efficiency."
    }

};


// =================================
// CAR DETAILS PAGE
// =================================

const params =
    new URLSearchParams(
        window.location.search
    );

const selectedCar =
    params.get("car");


if (
    selectedCar &&
    cars[selectedCar]
) {

    const car =
        cars[selectedCar];

    const carImage =
        document.getElementById(
            "car-image"
        );

    const carType =
        document.getElementById(
            "car-type"
        );

    const carName =
        document.getElementById(
            "car-name"
        );

    const carDescription =
        document.getElementById(
            "car-description"
        );

    const carPrice =
        document.getElementById(
            "car-price"
        );

    const carSeats =
        document.getElementById(
            "car-seats"
        );

    const carFuel =
        document.getElementById(
            "car-fuel"
        );

    const carTransmission =
        document.getElementById(
            "car-transmission"
        );

    const carAc =
        document.getElementById(
            "car-ac"
        );

    const ecoText =
        document.getElementById(
            "eco-text"
        );


    // ACTUAL CAR IMAGE

    if (carImage) {

        carImage.innerHTML =
            '<img src="' +
            car.image +
            '" alt="' +
            car.name +
            '">';

    }


    if (carType) {

        carType.textContent =
            car.type;

    }


    if (carName) {

        carName.textContent =
            car.name;

    }


    if (carDescription) {

        carDescription.textContent =
            car.description;

    }


    if (carPrice) {

        carPrice.textContent =
            car.price;

    }


    if (carSeats) {

        carSeats.textContent =
            car.seats;

    }


    if (carFuel) {

        carFuel.textContent =
            car.fuel;

    }


    if (carTransmission) {

        carTransmission.textContent =
            car.transmission;

    }


    if (carAc) {

        carAc.textContent =
            car.ac;

    }


    if (ecoText) {

        ecoText.textContent =
            car.eco;

    }


    document.title =
        car.name +
        " - DriveEase";

}


// =================================
// CAR DETAILS - BOOK NOW
// =================================

const detailsBookButton =
    document.getElementById(
        "details-book-btn"
    );


if (detailsBookButton) {

    const urlParams =
        new URLSearchParams(
            window.location.search
        );

    const currentCar =
        urlParams.get("car");


    if (currentCar) {

        detailsBookButton.addEventListener(
            "click",
            function () {

                window.location.href =
                    "booking.html?car=" +
                    currentCar;

            }
        );

    }

}


// =================================
// BOOKING PAGE
// =================================

const bookingParams =
    new URLSearchParams(
        window.location.search
    );

const bookingCarKey =
    bookingParams.get("car");


if (
    bookingCarKey &&
    cars[bookingCarKey]
) {

    const bookingCar =
        cars[bookingCarKey];

    const bookingCarName =
        document.getElementById(
            "booking-car-name"
        );

    const bookingCarType =
        document.getElementById(
            "booking-car-type"
        );

    const bookingPrice =
        document.getElementById(
            "booking-price"
        );

    const bookingCarImage =
        document.querySelector(
            ".summary-car-image"
        );


    if (bookingCarName) {

        bookingCarName.textContent =
            bookingCar.name;

    }


    if (bookingCarType) {

        bookingCarType.textContent =
            bookingCar.type;

    }


    if (bookingPrice) {

        bookingPrice.textContent =
            bookingCar.price;

    }


    // ACTUAL BOOKING IMAGE

    if (bookingCarImage) {

        bookingCarImage.innerHTML =
            '<img src="' +
            bookingCar.image +
            '" alt="' +
            bookingCar.name +
            '">';

    }

}


// =================================
// RENTAL DATE AND PRICE CALCULATION
// =================================

const pickupDateInput =
    document.getElementById(
        "pickup-date"
    );

const returnDateInput =
    document.getElementById(
        "return-date"
    );

const rentalDaysElement =
    document.getElementById(
        "rental-days"
    );

const totalElement =
    document.getElementById(
        "booking-total"
    );


if (pickupDateInput) {

    const today =
        new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            today.getDate()
        ).padStart(2, "0");

    pickupDateInput.min =
        `${year}-${month}-${day}`;

}


function getPriceAsNumber(
    priceText
) {

    return Number(
        priceText
            .replace("₹", "")
            .replace(",", "")
            .trim()
    );

}


function calculateRentalPrice() {

    if (
        !pickupDateInput ||
        !returnDateInput
    ) {

        return;

    }


    const pickupDate =
        pickupDateInput.value;

    const returnDate =
        returnDateInput.value;


    if (
        !pickupDate ||
        !returnDate
    ) {

        return;

    }


    const startDate =
        new Date(
            pickupDate
        );

    const endDate =
        new Date(
            returnDate
        );


    if (
        endDate < startDate
    ) {

        rentalDaysElement.textContent =
            "Invalid dates";

        totalElement.textContent =
            "₹0";

        return;

    }


    const timeDifference =
        endDate - startDate;


    let numberOfDays =
        Math.ceil(
            timeDifference /
            (1000 * 60 * 60 * 24)
        );


    if (
        numberOfDays === 0
    ) {

        numberOfDays = 1;

    }


    rentalDaysElement.textContent =
        numberOfDays +
        (
            numberOfDays === 1
                ? " day"
                : " days"
        );


    const priceText =
        document.getElementById(
            "booking-price"
        ).textContent;


    const pricePerDay =
        getPriceAsNumber(
            priceText
        );


    const totalPrice =
        pricePerDay *
        numberOfDays;


    totalElement.textContent =
        "₹" +
        totalPrice.toLocaleString(
            "en-IN"
        );

}


if (
    pickupDateInput &&
    returnDateInput
) {

    pickupDateInput.addEventListener(
        "change",
        calculateRentalPrice
    );

    returnDateInput.addEventListener(
        "change",
        calculateRentalPrice
    );

}


// =================================
// CONTINUE TO PAYMENT
// =================================

const continuePaymentButton =
    document.getElementById(
        "continue-payment"
    );


if (continuePaymentButton) {

    continuePaymentButton.addEventListener(
        "click",
        function () {

            const pickupDate =
                document.getElementById(
                    "pickup-date"
                ).value;

            const returnDate =
                document.getElementById(
                    "return-date"
                ).value;

            const rentalDaysText =
                document.getElementById(
                    "rental-days"
                ).textContent;

            const totalText =
                document.getElementById(
                    "booking-total"
                ).textContent;


            if (
                !pickupDate ||
                !returnDate
            ) {

                alert(
                    "Please select pickup and return dates."
                );

                return;

            }


            if (
                rentalDaysText ===
                "Invalid dates"
            ) {

                alert(
                    "Please select valid rental dates."
                );

                return;

            }


            const total =
                totalText
                    .replace("₹", "")
                    .replace(/,/g, "")
                    .trim();


            const paymentURL =
                "payment.html" +
                "?car=" +
                encodeURIComponent(
                    bookingCarKey
                ) +
                "&days=" +
                encodeURIComponent(
                    rentalDaysText
                ) +
                "&total=" +
                encodeURIComponent(
                    total
                ) +
                "&pickup=" +
                encodeURIComponent(
                    pickupDate
                ) +
                "&return=" +
                encodeURIComponent(
                    returnDate
                );


            window.location.href =
                paymentURL;

        }
    );

}


// =================================
// PAYMENT PAGE
// =================================

const paymentParams =
    new URLSearchParams(
        window.location.search
    );

const paymentCarKey =
    paymentParams.get("car");

const paymentDays =
    paymentParams.get("days");

const paymentTotal =
    paymentParams.get("total");


if (
    paymentCarKey &&
    cars[paymentCarKey]
) {

    const paymentCar =
        cars[paymentCarKey];

    const paymentCarName =
        document.getElementById(
            "payment-car-name"
        );

    const paymentCarType =
        document.getElementById(
            "payment-car-type"
        );

    const paymentPrice =
        document.getElementById(
            "payment-price"
        );

    const paymentDaysElement =
        document.getElementById(
            "payment-days"
        );

    const paymentTotalElement =
        document.getElementById(
            "payment-total"
        );

    const paymentCarImage =
        document.querySelector(
            ".payment-car-image"
        );


    if (paymentCarName) {

        paymentCarName.textContent =
            paymentCar.name;

    }


    if (paymentCarType) {

        paymentCarType.textContent =
            paymentCar.type;

    }


    if (paymentPrice) {

        paymentPrice.textContent =
            paymentCar.price;

    }


    if (
        paymentDaysElement &&
        paymentDays
    ) {

        paymentDaysElement.textContent =
            paymentDays;

    }


    if (
        paymentTotalElement &&
        paymentTotal
    ) {

        paymentTotalElement.textContent =
            "₹" +
            Number(paymentTotal)
                .toLocaleString(
                    "en-IN"
                );

    }


    // ACTUAL PAYMENT IMAGE

    if (paymentCarImage) {

        paymentCarImage.innerHTML =
            '<img src="' +
            paymentCar.image +
            '" alt="' +
            paymentCar.name +
            '">';

    }


    document.title =
        "Payment - " +
        paymentCar.name +
        " - DriveEase";

}


// =================================
// PAY NOW
// =================================

const payNowButton =
    document.getElementById(
        "pay-now"
    );


if (payNowButton) {

    payNowButton.addEventListener(
        "click",
        function () {

            if (!paymentCarKey) {

                alert(
                    "Booking information is missing."
                );

                return;

            }


            const bookingId =
                "DRV-" +
                Date.now()
                    .toString()
                    .slice(-6);


            const bookingData = {

                bookingId:
                    bookingId,

                carKey:
                    paymentCarKey,

               carName:
    cars[paymentCarKey]?.name || paymentCarKey,
                pickupDate:
                    paymentParams.get(
                        "pickup"
                    ) || "",

                returnDate:
                    paymentParams.get(
                        "return"
                    ) || "",

                days:
                    paymentDays ||
                    "1 day",

                total:
                    paymentTotal ||
                    "0",

                status:
                    "Confirmed"

            };


            localStorage.setItem(
                "latestBooking",
                JSON.stringify(
                    bookingData
                )
            );


            const confirmationURL =
                "confirmation.html" +
                "?car=" +
                encodeURIComponent(
                    paymentCarKey
                ) +
                "&days=" +
                encodeURIComponent(
                    paymentDays ||
                    "1 day"
                ) +
                "&total=" +
                encodeURIComponent(
                    paymentTotal ||
                    "0"
                );


            window.location.href =
                confirmationURL;

        }
    );

}


// =================================
// CONFIRMATION PAGE
// =================================

const confirmationParams =
    new URLSearchParams(
        window.location.search
    );

const confirmationCarKey =
    confirmationParams.get(
        "car"
    );

const confirmationDays =
    confirmationParams.get(
        "days"
    );

const confirmationTotal =
    confirmationParams.get(
        "total"
    );


if (
    confirmationCarKey &&
    cars[confirmationCarKey]
) {

    const confirmationCar =
        cars[confirmationCarKey];

    const confirmationCarName =
        document.getElementById(
            "confirmation-car-name"
        );

    const confirmationDaysElement =
        document.getElementById(
            "confirmation-days"
        );

    const confirmationTotalElement =
        document.getElementById(
            "confirmation-total"
        );


    if (confirmationCarName) {

        confirmationCarName.textContent =
            confirmationCar.name;

    }


    if (
        confirmationDaysElement &&
        confirmationDays
    ) {

        confirmationDaysElement.textContent =
            confirmationDays;

    }


    if (
        confirmationTotalElement &&
        confirmationTotal
    ) {

        confirmationTotalElement.textContent =
            "₹" +
            Number(
                confirmationTotal
            ).toLocaleString(
                "en-IN"
            );

    }


    document.title =
        "Booking Confirmed - " +
        confirmationCar.name;

}


// =================================
// MY BOOKINGS PAGE
// =================================

const savedBooking =
    localStorage.getItem(
        "latestBooking"
    );


if (savedBooking) {

    const booking =
        JSON.parse(
            savedBooking
        );


    const myBookingCar =
        document.getElementById(
            "my-booking-car"
        );

    const myBookingId =
        document.getElementById(
            "my-booking-id"
        );

    const myPickupDate =
        document.getElementById(
            "my-pickup-date"
        );

    const myReturnDate =
        document.getElementById(
            "my-return-date"
        );

    const myRentalDays =
        document.getElementById(
            "my-rental-days"
        );

    const myTotal =
        document.getElementById(
            "my-total"
        );

    const myBookingImage =
        document.getElementById(
            "my-booking-image"
        );


    if (myBookingCar) {

        myBookingCar.textContent =
            booking.carName;

    }


    if (myBookingId) {

        myBookingId.textContent =
            booking.bookingId;

    }


    if (myPickupDate) {

        myPickupDate.textContent =
            booking.pickupDate ||
            "Not selected";

    }


    if (myReturnDate) {

        myReturnDate.textContent =
            booking.returnDate ||
            "Not selected";

    }


    if (myRentalDays) {

        myRentalDays.textContent =
            booking.days;

    }


    if (myTotal) {

        myTotal.textContent =
            "₹" +
            Number(
                booking.total
            ).toLocaleString(
                "en-IN"
            );

    }


    // SHOW ACTUAL BOOKED CAR IMAGE

    if (
        myBookingImage &&
        booking.carKey &&
        cars[booking.carKey]
    ) {

        myBookingImage.innerHTML =
            '<img src="' +
            cars[booking.carKey].image +
            '" alt="' +
            booking.carName +
            '">';

    }

}


// =================================
// REGISTER FORM
// =================================

const registerForm =
    document.getElementById(
        "register-form"
    );


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "register-name"
                ).value.trim();

            const email =
                document.getElementById(
                    "register-email"
                ).value.trim();

            const phone =
                document.getElementById(
                    "register-phone"
                ).value.trim();

            const password =
                document.getElementById(
                    "register-password"
                ).value;

            const confirmPassword =
                document.getElementById(
                    "confirm-password"
                ).value;

            const terms =
                document.getElementById(
                    "terms"
                ).checked;


            if (
                !name ||
                !email ||
                !phone ||
                !password ||
                !confirmPassword
            ) {

                alert(
                    "Please fill in all the fields."
                );

                return;

            }


            if (
                password.length < 6
            ) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;

            }


            if (
                password !==
                confirmPassword
            ) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            if (!terms) {

                alert(
                    "Please agree to the terms and conditions."
                );

                return;

            }


            const user = {

                name:
                    name,

                email:
                    email,

                phone:
                    phone,

                password:
                    password

            };


            localStorage.setItem(
                "driveEaseUser",
                JSON.stringify(
                    user
                )
            );


            alert(
                "Account created successfully!"
            );


            window.location.href =
                "login.html";

        }
    );

}


// =================================
// LOGIN FORM
// =================================

const loginForm =
    document.getElementById(
        "login-form"
    );


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "login-email"
                ).value.trim();

            const password =
                document.getElementById(
                    "login-password"
                ).value;


            if (
                !email ||
                !password
            ) {

                alert(
                    "Please enter your email and password."
                );

                return;

            }


            const savedUser =
                localStorage.getItem(
                    "driveEaseUser"
                );


            if (!savedUser) {

                alert(
                    "No account found. Please register first."
                );

                return;

            }


            const user =
                JSON.parse(
                    savedUser
                );


            if (
                email === user.email &&
                password === user.password
            ) {

                localStorage.setItem(
                    "driveEaseLoggedIn",
                    "true"
                );


                alert(
                    "Login successful!"
                );


                window.location.href =
                    "../index.html";

            } else {

                alert(
                    "Incorrect email or password."
                );

            }

        }
    );

}


// =================================
// LOGIN STATUS
// =================================

const loginLink =
    document.getElementById(
        "login-link"
    );

const loggedIn =
    localStorage.getItem(
        "driveEaseLoggedIn"
    );


// =================================
// CHANGE LOGIN TO PROFILE
// =================================

if (
    loginLink &&
    loggedIn === "true"
) {

    loginLink.textContent =
        "Profile";


    if (
        window.location.pathname
            .includes("/pages/")
    ) {

        loginLink.href =
            "profile.html";

    } else {

        loginLink.href =
            "pages/profile.html";

    }

}


// =================================
// MAKE SURE CONTACT LINK EXISTS
// =================================

const navigation =
    document.querySelector(
        ".navbar nav"
    );


if (navigation) {

    const contactLink =
        navigation.querySelector(
            'a[href="contact.html"], a[href="pages/contact.html"]'
        );


    if (!contactLink) {

        const newContactLink =
            document.createElement(
                "a"
            );


        newContactLink.textContent =
            "Contact";


        if (
            window.location.pathname
                .includes("/pages/")
        ) {

            newContactLink.href =
                "contact.html";

        } else {

            newContactLink.href =
                "pages/contact.html";

        }


        if (loginLink) {

            navigation.insertBefore(
                newContactLink,
                loginLink
            );

        } else {

            navigation.appendChild(
                newContactLink
            );

        }

    }

}


// =================================
// PROFILE DATA
// =================================

const profileName =
    document.getElementById(
        "profile-name"
    );

const profileEmail =
    document.getElementById(
        "profile-email"
    );

const profilePhone =
    document.getElementById(
        "profile-phone"
    );


const savedProfileUser =
    localStorage.getItem(
        "driveEaseUser"
    );


if (savedProfileUser) {

    const profileUser =
        JSON.parse(
            savedProfileUser
        );


    if (profileName) {

        profileName.textContent =
            profileUser.name;

    }


    if (profileEmail) {

        profileEmail.textContent =
            profileUser.email;

    }


    if (profilePhone) {

        profilePhone.textContent =
            profileUser.phone;

    }

}


// =================================
// LOGOUT
// =================================

const logoutButton =
    document.getElementById(
        "logout-btn"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "driveEaseLoggedIn"
            );


            alert(
                "You have been logged out."
            );


            window.location.href =
                "../index.html";

        }
    );

}


// =================================
// CONTACT FORM
// =================================

const contactForm =
    document.getElementById(
        "contact-form"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "contact-name"
                ).value.trim();

            const email =
                document.getElementById(
                    "contact-email"
                ).value.trim();

            const subject =
                document.getElementById(
                    "contact-subject"
                ).value.trim();

            const message =
                document.getElementById(
                    "contact-message"
                ).value.trim();


            const successMessage =
                document.getElementById(
                    "contact-success"
                );


            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {

                alert(
                    "Please fill in all the fields."
                );

                return;

            }


            if (successMessage) {

                successMessage.textContent =
                    "Message sent successfully! We will get back to you soon.";

            }


            contactForm.reset();

        }
    );

}


// =================================
// CARS PAGE - SEARCH, FILTER AND SORT
// =================================

const carSearch =
    document.getElementById(
        "car-search"
    );
   const urlSearchParams =
    new URLSearchParams(
        window.location.search
    );

const homepageSearch =
    urlSearchParams.get("search");

if (carSearch && homepageSearch) {

    carSearch.value =
        homepageSearch;

} 

// =================================
// SEARCH FROM HOMEPAGE
// =================================


const carTypeFilter =
    document.getElementById(
        "car-type"
    );

const fuelTypeFilter =
    document.getElementById(
        "fuel-type"
    );

const transmissionFilter =
    document.getElementById(
        "transmission"
    );

const seatsFilter =
    document.getElementById(
        "seats"
    );

const ecoFilter =
    document.getElementById(
        "eco"
    );

const sortCars =
    document.getElementById(
        "sort-cars"
    );


// =================================
// FILTER CARS
// =================================

function filterCars() {

    const searchText =
        carSearch
            ? carSearch.value
                .toLowerCase()
                .trim()
            : "";

    const selectedType =
        carTypeFilter
            ? carTypeFilter.value
                .toLowerCase()
            : "all";

    const selectedFuel =
        fuelTypeFilter
            ? fuelTypeFilter.value
                .toLowerCase()
            : "all";

    const selectedTransmission =
        transmissionFilter
            ? transmissionFilter.value
                .toLowerCase()
            : "all";

    const selectedSeats =
        seatsFilter
            ? seatsFilter.value
            : "all";

    const selectedEco =
        ecoFilter
            ? ecoFilter.value
            : "all";

    const selectedSort =
        sortCars
            ? sortCars.value
            : "recommended";


    const carCards =
        document.querySelectorAll(
            ".car-card"
        );


    const noCarsMessage =
        document.getElementById(
            "no-cars-message"
        );


    const carCardsArray =
        Array.from(
            carCards
        );


    // =================================
    // CHECK EACH CAR
    // =================================

    let visibleCars =
        0;


    carCardsArray.forEach(
        function (card) {

            const carNameElement =
                card.querySelector(
                    "h3"
                );

            const carTypeElement =
                card.querySelector(
                    ".car-type"
                );

            const fuelElement =
                card.querySelector(
                    ".car-details span:nth-child(2)"
                );

            const transmissionElement =
                card.querySelector(
                    ".car-details span:nth-child(3)"
                );

            const seatsElement =
                card.querySelector(
                    ".car-details span:nth-child(1)"
                );


            const carName =
                carNameElement
                    ? carNameElement.textContent
                        .toLowerCase()
                        .trim()
                    : "";


            const carType =
                carTypeElement
                    ? carTypeElement.textContent
                        .toLowerCase()
                        .trim()
                    : "";


            const carFuel =
                fuelElement
                    ? fuelElement.textContent
                        .toLowerCase()
                        .trim()
                    : "";


            const carTransmission =
                transmissionElement
                    ? transmissionElement.textContent
                        .toLowerCase()
                        .trim()
                    : "";


            const carSeats =
                seatsElement
                    ? seatsElement.textContent
                        .toLowerCase()
                        .trim()
                    : "";


            const ecoLabel =
                card.querySelector(
                    ".eco-label"
                );


            const isEco =
                ecoLabel !== null;


            // SEARCH

            const matchesSearch =
                carName.includes(
                    searchText
                );


            // CAR TYPE

            let matchesType =
                false;


            if (
                selectedType === "all"
            ) {

                matchesType =
                    true;

            } else if (
                selectedType === "suv"
            ) {

                matchesType =
                    carType.includes(
                        "suv"
                    );

            } else if (
                selectedType === "sedan"
            ) {

                matchesType =
                    carType.includes(
                        "sedan"
                    );

            } else if (
                selectedType === "hatchback"
            ) {

                matchesType =
                    carType.includes(
                        "hatchback"
                    );

            } else if (
                selectedType === "mpv"
            ) {

                matchesType =
                    carType.includes(
                        "mpv"
                    );

            }


            // FUEL TYPE

            let matchesFuel =
                false;


            if (
                selectedFuel === "all"
            ) {

                matchesFuel =
                    true;

            } else {

                matchesFuel =
                    carFuel.includes(
                        selectedFuel
                    );

            }


            // TRANSMISSION

            let matchesTransmission =
                false;


            if (
                selectedTransmission === "all"
            ) {

                matchesTransmission =
                    true;

            } else {

                matchesTransmission =
                    carTransmission.includes(
                        selectedTransmission
                    );

            }


            // SEATS

            let matchesSeats =
                false;


            if (
                selectedSeats === "all"
            ) {

                matchesSeats =
                    true;

            } else {

                matchesSeats =
                    carSeats.includes(
                        selectedSeats
                    );

            }


            // ECO-FRIENDLY

            let matchesEco =
                false;


            if (
                selectedEco === "all"
            ) {

                matchesEco =
                    true;

            } else {

                matchesEco =
                    isEco;

            }


            // SHOW / HIDE CAR

            if (
                matchesSearch &&
                matchesType &&
                matchesFuel &&
                matchesTransmission &&
                matchesSeats &&
                matchesEco
            ) {

                card.style.display =
                    "";

                visibleCars++;

            } else {

                card.style.display =
                    "none";

            }

        }
    );


    // =================================
    // SORT CARS
    // =================================

    if (
        selectedSort !== "recommended"
    ) {

        carCardsArray.sort(
            function (a, b) {

                const nameA =
                    a
                        .querySelector("h3")
                        .textContent
                        .trim()
                        .toLowerCase();


                const nameB =
                    b
                        .querySelector("h3")
                        .textContent
                        .trim()
                        .toLowerCase();


                const priceTextA =
                    a.textContent.match(
                        /₹[\d,]+/
                    );


                const priceTextB =
                    b.textContent.match(
                        /₹[\d,]+/
                    );


                const priceA =
                    priceTextA
                        ? Number(
                            priceTextA[0]
                                .replace(
                                    "₹",
                                    ""
                                )
                                .replace(
                                    /,/g,
                                    ""
                                )
                        )
                        : 0;


                const priceB =
                    priceTextB
                        ? Number(
                            priceTextB[0]
                                .replace(
                                    "₹",
                                    ""
                                )
                                .replace(
                                    /,/g,
                                    ""
                                )
                        )
                        : 0;


                // LOW TO HIGH

                if (
                    selectedSort ===
                    "price-low"
                ) {

                    return (
                        priceA -
                        priceB
                    );

                }


                // HIGH TO LOW

                if (
                    selectedSort ===
                    "price-high"
                ) {

                    return (
                        priceB -
                        priceA
                    );

                }


                // NAME A TO Z

                if (
                    selectedSort ===
                    "name"
                ) {

                    return nameA.localeCompare(
                        nameB
                    );

                }


                return 0;

            }
        );

    }


    // =================================
    // PUT SORTED CARDS BACK
    // =================================

    if (
        carCardsArray.length > 0
    ) {

        const carsContainer =
            carCardsArray[0]
                .parentElement;


        carCardsArray.forEach(
            function (card) {

                carsContainer.appendChild(
                    card
                );

            }
        );

    }


    // =================================
    // NO CARS FOUND MESSAGE
    // =================================

    if (noCarsMessage) {

        if (
            visibleCars === 0
        ) {

            noCarsMessage.style.display =
                "block";

        } else {

            noCarsMessage.style.display =
                "none";

        }

    }

}


// =================================
// SEARCH
// =================================

if (carSearch) {

    carSearch.addEventListener(
        "input",
        filterCars
    );

}


// =================================
// CAR TYPE FILTER
// =================================

if (carTypeFilter) {

    carTypeFilter.addEventListener(
        "change",
        filterCars
    );

}


// =================================
// FUEL TYPE FILTER
// =================================

if (fuelTypeFilter) {

    fuelTypeFilter.addEventListener(
        "change",
        filterCars
    );

}


// =================================
// TRANSMISSION FILTER
// =================================

if (transmissionFilter) {

    transmissionFilter.addEventListener(
        "change",
        filterCars
    );

}


// =================================
// SEATS FILTER
// =================================

if (seatsFilter) {

    seatsFilter.addEventListener(
        "change",
        filterCars
    );

}


// =================================
// ECO FILTER
// =================================

if (ecoFilter) {

    ecoFilter.addEventListener(
        "change",
        filterCars
    );

}


// =================================
// SORT
// =================================

if (sortCars) {

    sortCars.addEventListener(
        "change",
        filterCars
    );

}
if (carSearch && homepageSearch) {
    filterCars();
}


// =================================
// RESET FILTERS
// =================================

const resetFilters =
    document.getElementById(
        "reset-filters"
    );


if (resetFilters) {

    resetFilters.addEventListener(
        "click",
        function () {

            if (carSearch) {

                carSearch.value =
                    "";

            }


            if (carTypeFilter) {

                carTypeFilter.value =
                    "all";

            }


            if (fuelTypeFilter) {

                fuelTypeFilter.value =
                    "all";

            }


            if (transmissionFilter) {

                transmissionFilter.value =
                    "all";

            }


            if (seatsFilter) {

                seatsFilter.value =
                    "all";

            }


            if (ecoFilter) {

                ecoFilter.value =
                    "all";

            }


            if (sortCars) {

                sortCars.value =
                    "recommended";

            }


            filterCars();

        }
    );

}


// =================================
// VIEW BOOKING DETAILS
// =================================

const viewBookingBtn =
    document.getElementById(
        "view-booking-btn"
    );


if (viewBookingBtn) {

    viewBookingBtn.addEventListener(
        "click",
        function () {

            const savedBooking =
                localStorage.getItem(
                    "latestBooking"
                );


            if (!savedBooking) {

                alert(
                    "No booking details found."
                );

                return;

            }


            const booking =
                JSON.parse(
                    savedBooking
                );


            alert(
                "BOOKING DETAILS\n\n" +

                "Booking ID: " +
                booking.bookingId +

                "\nCar: " +
                booking.carName +

                "\nPickup Date: " +
                booking.pickupDate +

                "\nReturn Date: " +
                booking.returnDate +

                "\nRental Days: " +
                booking.days +

                "\nTotal Amount: ₹" +
                Number(
                    booking.total
                ).toLocaleString(
                    "en-IN"
                ) +

                "\nStatus: " +
                booking.status
            );

        }
    );

}


// =================================
// CANCEL BOOKING
// =================================

const cancelBookingBtn =
    document.querySelector(
        ".cancel-booking-btn"
    );


if (cancelBookingBtn) {

    cancelBookingBtn.addEventListener(
        "click",
        function () {

            const savedBooking =
                localStorage.getItem(
                    "latestBooking"
                );


            if (!savedBooking) {

                alert(
                    "No booking found."
                );

                return;

            }


            const booking =
                JSON.parse(
                    savedBooking
                );


            if (
                booking.status ===
                "Cancelled"
            ) {

                alert(
                    "This booking is already cancelled."
                );

                cancelBookingBtn.textContent =
                    "Booking Cancelled";

                cancelBookingBtn.disabled =
                    true;

                return;

            }


            const confirmCancel =
                confirm(
                    "Are you sure you want to cancel this booking?"
                );


            if (confirmCancel) {

                booking.status =
                    "Cancelled";


                localStorage.setItem(
                    "latestBooking",
                    JSON.stringify(
                        booking
                    )
                );


                const statusElement =
                    document.querySelector(
                        ".booking-status"
                    );


                if (statusElement) {

                    statusElement.textContent =
                        "Cancelled";


                    statusElement.classList.remove(
                        "confirmed"
                    );


                    statusElement.classList.add(
                        "cancelled"
                    );

                }


                cancelBookingBtn.textContent =
                    "Booking Cancelled";


                cancelBookingBtn.disabled =
                    true;


                alert(
                    "Your booking has been cancelled successfully."
                );

            }

        }
    );
}
// CONNECT TO BACKEND

// CONNECT BACKEND CARS TO WEBSITE

fetch("http://localhost:8080/api/cars")
    .then(response => response.json())
    .then(data => {

        console.log("Backend connected successfully!");
        console.log("Cars from backend:", data);

        const container =
            document.getElementById("backend-cars");

        if (!container) {
            return;
        }

        // Remove hardcoded cars
        container.innerHTML = "";

        // Display cars from backend
        data.forEach(car => {

            const card =
                document.createElement("div");

            card.className = "car-card";

            card.innerHTML = `
    <div class="car-info">
        <h3>${car.brand} ${car.model}</h3>

        <p class="car-type">Car</p>

        <div class="car-details">
            <span>ID: ${car.id}</span>
            <span>
                ${car.available ? "Available" : "Not Available"}
            </span>
        </div>

        <p class="car-price">
            ₹${car.rentalPrice} / day
        </p>

        <p>
            Registration: ${car.registrationNumber}
        </p>

        <button onclick="window.location.href='pages/car-details.html?car=${car.id}'">
    View Details
</button>
    </div>
`;

            container.appendChild(card);

        });

    })
    .catch(error => {

        console.error(
            "Backend connection failed:",
            error
        );

    })
    .catch(error => {

    console.error(
        "Backend connection failed:",
        error
    );

});


// =================================
// HOMEPAGE CAR SEARCH
// =================================

const homeCarSearch =
    document.getElementById("home-car-search");

const homeSearchButton =
    document.getElementById("home-search-btn");

if (homeSearchButton) {

    homeSearchButton.addEventListener(
        "click",
        function () {

            const searchText =
                homeCarSearch
                    ? homeCarSearch.value.trim()
                    : "";

            window.location.href =
                "pages/cars.html?search=" +
                encodeURIComponent(searchText);

        }
    );

}