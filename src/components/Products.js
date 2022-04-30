import React from 'react'
import Item from './Item';

function Products() {
    return (
        <div>
            <div className="Foreview">
                <h1 className="Heading">Today's Menu</h1>
                <div align="center">
                    <Item img={"01"} name={"Jollof Rice & Salad"} descr={"1 Plate"} price={"N4,500"} />
                    <Item img={"02"} name={"Meat Pie"} descr={"2 pcs, Packaged"} price={"N2,360"} />
                    <Item img={"03"} name={"Jollof Rice With Delicacies"} descr={""} price={"N9,500"} />
                    <Item img={"04"} name={"Ofada Rice With Delicacies"} descr={""} price={"N6,200"} />
                    <Item img={"05"} name={"Fried Chicken Laps"} descr={"2 pcs, dished"} price={"N4,200"} />
                    <Item img={"06"} name={"Indian Fried Rice"} descr={"1 Plate"} price={"N7,400"} />
                    <Item img={"07"} name={"Meat Pie"} descr={"1 pcs"} price={"N1,500"} />
                    <Item img={"08"} name={"Hamburger & Fried Yams"} descr={""} price={"N10,400"} />
                    <Item img={"09"} name={"Grilled Fish and Meat"} descr={"Varieties"} price={"N2,700"} />
                    <Item img={"10"} name={"Rice With Fish & Delicacies"} descr={""} price={"N3,200"} />
                    <Item img={"11"} name={"Ghanaian Jollof Rice & Salad"} descr={""} price={"N6,900"} />
                    <Item img={"12"} name={"Fried Chicken Laps"} descr={"3 pcs"} price={"N5,500"} />
                </div>
                <br/><br/>
            </div>
        </div>
    )
}

export default Products
