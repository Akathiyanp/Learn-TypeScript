/*
    Union = pipe operator

    Intersection = end operator

    This allows us to combine multiple types together to create some more complex types

*/


interface BusinessPartner {
    name: string;
}

interface ContactDetails {
    email: string;
    phone: string;
}


type BusinessContact = BusinessPartner & ContactDetails

const contact: BusinessContact = {
    name: "rock",
    email: "rock@gmail.com",
    phone: ""
}

interface Individual {
    name: string;
    birthday: Date;

}

interface Organization {
    companyName: string;
    workPhone: string
}

type ContactType = Individual | Organization

type CompContact = Individual & Organization

function addContact(contact: ContactType) {
    if("birthday" in contact){
        console.log(contact.name, contact.birthday)
    }else{
        console.log(contact.companyName, contact.workPhone)
    }
}
