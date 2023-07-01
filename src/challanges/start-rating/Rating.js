import React from 'react'

const ratingsData = [
    {
        name: "Product 1",
        description: "This is the first product.",
        price: 19.99,
        rating: 4.5
    },
    {
        name: "Product 2",
        description: "This is the second product.",
        price: 9.99,
        rating: 3.8
    },
    {
        name: "Product 3",
        description: "This is the third product.",
        price: 29.99,
        rating: 4.2
    },
    {
        name: "Product 4",
        description: "This is the fourth product.",
        price: 14.99,
        rating: 4.7
    },
    {
        name: "Product 5",
        description: "This is the fifth product.",
        price: 24.99,
        rating: 4.9
    }
];

const Rating = () => {
    const filledStar = () => <i class="fa fa-solid fa-star"></i>;
    const halfStar = () => <i class="fa fa-duotone fa-star-half-stroke"></i>;
    const getRating = (rating) => {
        const [decimal, fraction] = rating.toString().split(".").map(Number);
        return (
            <>
                <p>{rating} </p>
                {getStars(decimal, fraction).map(el => <span>{el}</span>)}
            </>
        )
    }


    const getStars = (decimal, fraction) => {
        const starsArray = [];
        for (let i = 0; i < decimal; i++) {
            starsArray.push(filledStar());
        }
        if (fraction) {
            starsArray.push(halfStar());
        }
        return starsArray;

    }
    return (
        <>
            {ratingsData.map((el, index) => {
                return (
                    <div className='card card-primary' style={{ "margin": "1rem" }}>
                        <div className="card-header"><span>{el.name}</span></div>
                        <div className="card-body">
                            <p>price: {el.price}</p>
                            <p>rating: {getRating(el.rating)}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Rating