import './serviceslist.css'
import ServiceCard from '../../shared/servicecard/servicecard';

export default function ServicesList() {
    function getServiceList() {
        var props = [
            {
                id: 1,
                name: "Company Registration",
                price: "1999",
                description: "Register your company with the name you want."
            },
            {
                id: 2,
                name: "15 CA CB",
                price: "1699",
                description: ""
            },
            {
                id: 3,
                name: "Company Formation",
                price: "2999",
                description: "Create company with the group of your people with more than 1 person."
            },
            {
                id: 2,
                name: "15 CA CB",
                price: "1699",
                description: ""
            },
            {
                id: 3,
                name: "Company Formation",
                price: "2999",
                description: "Create company with the group of your people with more than 1 person."
            },
            {
                id: 2,
                name: "15 CA CB",
                price: "1699",
                description: ""
            },
            {
                id: 3,
                name: "Company Formation",
                price: "2999",
                description: "Create company with the group of your people with more than 1 person."
            },
            {
                id: 2,
                name: "15 CA CB",
                price: "1699",
                description: ""
            },
            {
                id: 3,
                name: "Company Formation",
                price: "2999",
                description: "Create company with the group of your people with more than 1 person."
            }
        ]
        return props;
    }

    var services = getServiceList()

    const serviceCardList = services.map((d) => <ServiceCard key={d.id} name={d.name} price={d.price} description={d.description} />);

    return (

        <div className='service_list'>
            {serviceCardList}
        </div>
    );
} 