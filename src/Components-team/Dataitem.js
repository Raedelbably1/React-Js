import React, { Component } from 'react';
import Data from './Data';
import DataElement from './DataElement';

class DataItem extends Component {
    constructor() {
        super();
        this.state = {
            data: Data,
            Data: [], // مصفوفة لتخزين البيانات التي سيتم عرضها
            counter: 0, // عداد ليتابع عدد العناصر المضافة
        };
        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent() {
        if (this.state.counter < this.state.data.length) {
            const newDataItem = this.state.data[this.state.counter];
            this.setState(prevState => ({
                Data: [...prevState.Data, newDataItem], // إضافة العنصر الجديد إلى مصفوفة Data
                counter: prevState.counter + 1, // زيادة العداد بشكل صحيح
            }), () => {
                console.log(this.state.Data);
            });
        } else {
            console.log("No more data to add.");
        }
    }

    render() {
        return (
            <div className="row">
                <h1 style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>Our Team</h1>
                <button className='btn btn-primary btn-lg btn-block' onClick={this.clickEvent}>Click me</button>
                {this.state.Data.map(item => (
                    <DataElement
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        phone={item.phone}
                        email={item.email}
                        position={item.position}
                    />
                ))}
            </div>
        );
    }
}

export default DataItem;

