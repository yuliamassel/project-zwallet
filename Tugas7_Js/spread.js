const data = [
    {
        usserName : 'Massel Yulia Wicaksono',
        nickName : 'Massel',
        email : 'yuliamassel8@gmail.com',
    },    
    {   
        addres: 'Karangjoho RT/RW 006/001 Karanggayam Kebumen',
        street: 'Jl.Karanganom-Karanggayam',
        posCode: '54365'
    }
]
const detailBio = {
        ...data[0],
        hobby : 'Reading Book',
        sports : 'Bicycle'
    
    }
    
    const {addres,street} = data[1]
    const putsomeBio = {
        addres,
        street    
    }

console.log(putsomeBio)