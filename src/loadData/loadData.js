


export const loadData = (token) => {



    const exData = [
        {
            user: { email: 'ivan1@abv.bg', password: '123123', phoneNumber: '089345687', firstLastNames: 'Ivan Petrovich11' },
            data: {
                "user": {
                    "flNames": "Ivan Petrovich11",
                    "email": "ivan1@abv.bg",
                    "phoneNumber": "0123456789"
                },
                "typeOrder": {
                    "problem": false,
                    "consumables": true
                },
                "description": {
                    "title": "Oil change",
                    "text": "10w-40 synthetic oil to change",
                    "photos": []
                },
                "carInfo": {
                    "brandModel": "Toyota Corolla",
                    "productDate": "2017 February",
                    "engine": "gasoline",
                    "km": 176355,
                    "imageUrl": "https://carsales.pxcrush.net/car/spec/S000BHAO.jpg"
                },
                "carAbmissionDate": {
                    "date": "2023-05-01",
                    "hour": "14:30"
                }
            }


        },
        {
            user: { email: 'ivan2@abv.bg', password: '123123', phoneNumber: '089345687', firstLastNames: 'Ivan Petrovich22' },
            data: {
                "user": {
                    "flNames": "Ivan Petrovich22",
                    "email": "ivan2@abv.bg",
                    "phoneNumber": "0123456789"
                },
                "typeOrder": {
                    "problem": true,
                    "consumables": true
                },
                "description": {
                    "title": "accident",
                    "text": "right front damaged, some rust to repair",
                    "photos": [
                        { "link": "https://cdn.motor1.com/images/mgl/Z3Yx2/s3/wrecked-subaru-forester-repair-by-arthur-tussik.webp" },
                        { "link": "https://www.subaruforester.org/attachments/img_2538-jpg.536271/" }
                    ]
                },
                "carInfo": {
                    "brandModel": "Subaru Forester",
                    "productDate": "2015 April",
                    "engine": "gasoline",
                    "km": 156355,
                    "imageUrl": "https://automedia.investor.bg/media/files/resized/uploadedfiles/640x0/33e/5126b6d88043700c7f4c1ded7c0f633e-forester-4.jpg"
                },
                "carAbmissionDate": {
                    "date": "2023-05-01",
                    "hour": "14:30"
                }
            }


        },

        {
            user: { email: 'ivan3@abv.bg', password: '123123', phoneNumber: '089345687', firstLastNames: 'Ivan Petrovich33' },
            data: {
                "user": {
                    "flNames": "Ivan Petrovich33",
                    "email": "ivan3@abv.bg",
                    "phoneNumber": "0123456789"
                },
                "typeOrder": {
                    "problem": true,
                    "consumables": false
                },
                "description": {
                    "title": "slow moving window",
                    "text": "to fix a Slow Moving Power Window",
                    "photos": []
                },
                "carInfo": {
                    "brandModel": "dacia duster",
                    "productDate": "2019 ",
                    "engine": "gasoline",
                    "km": 177355,
                    "imageUrl": "https://automedia.investor.bg//media/files/resized/article/w1200x630/1ef/b83daa04d39cb7bab07cba4be6b151ef-06-1.jpg"
                },
                "carAbmissionDate": {
                    "date": "2023-05-01",
                    "hour": "14:30"
                }
            }


        },
        {
            user: { email: 'ivan4@abv.bg', password: '123123', phoneNumber: '089345687', firstLastNames: 'Ivan Petrovich44' },
            data: {
                "user": {
                    "flNames": "Ivan Petrovich44",
                    "email": "ivan4@abv.bg",
                    "phoneNumber": "0123456789"
                },
                "typeOrder": {
                    "problem": false,
                    "consumables": true
                },
                "description": {
                    "title": "Loose wheel nut indicators change",
                    "text": "the old one indicators stop working after 10 minutes",
                    "photos": [
                        { "link": "https://raneys-cdn11.imgix.net/images/stencil/1280x1280/products/195138/162402/RWCRW5810Y-1__22202.1618426094.jpg?c=2&imbypass=on" }
                    ]
                },
                "carInfo": {
                    "brandModel": "suzuki sx4",
                    "productDate": "2018",
                    "engine": "gasoline",
                    "km": 189355,
                    "imageUrl": "https://dinside.dagbladet.no/images/66617672.jpg?imageId=66617672&panow=100&panoh=58.6&panox=0&panoy=25.5&heightw=100&heighth=100&heightx=0&heighty=0&width=1200&height=675"
                },
                "carAbmissionDate": {
                    "date": "2023-05-01",
                    "hour": "14:30"
                }
            }


        },
        {
            user: { email: 'ivan5@abv.bg', password: '123123', phoneNumber: '089345687', firstLastNames: 'Ivan Petrovich55' },
            data: {
                "user": {
                    "flNames": "Ivan Petrovich55",
                    "email": "ivan5@abv.bg",
                    "phoneNumber": "0123456789"
                },
                "typeOrder": {
                    "problem": true,
                    "consumables": false
                },
                "description": {
                    "title": "steering wheel play",
                    "text": "there is steering wheel play, sprobably steering rack to recycle",
                    "photos": []
                },
                "carInfo": {
                    "brandModel": "Nissan Micra",
                    "productDate": "2016 ",
                    "engine": "gasoline",
                    "km": 177334,
                    "imageUrl": "https://www.auto-data.net/images/f76/Nissan-Micra-K11_1.jpg"
                },
                "carAbmissionDate": {
                    "date": "2023-05-01",
                    "hour": "14:30"
                }
            }


        },
        {
            user: { email: 'ivan6@abv.bg', password: '123123', phoneNumber: '089345687', firstLastNames: 'Ivan Petrovich66' },
            data: {
                "user": {
                    "flNames": "Ivan Petrovich66",
                    "email": "ivan6@abv.bg",
                    "phoneNumber": "0123456789"
                },
                "typeOrder": {
                    "problem": true,
                    "consumables": false
                },
                "description": {
                    "title": "door fix",
                    "text": "back left door to fix",
                    "photos": [
                        { "link": "https://thumbs.dreamstime.com/b/damaged-citroen-picasso-door-167954156.jpg" }
                    ]
                },
                "carInfo": {
                    "brandModel": "citroen picasso",
                    "productDate": "2010 April",
                    "engine": "gasoline",
                    "km": 156355,
                    "imageUrl": "https://mobistatic2.focus.bg/mobile/photosorg/668/1/big//11677163486496668_I5.jpg"
                },
                "carAbmissionDate": {
                    "date": "2023-05-01",
                    "hour": "14:30"
                }
            }


        },
        {

            user: { email: 'ivan7@abv.bg', password: '123123', phoneNumber: '089345687', firstLastNames: 'Ivan Petrovich77' },
            data: {
                "user": {
                    "flNames": "Ivan Petrovich77",
                    "email": "ivan7@abv.bg",
                    "phoneNumber": "0123456789"
                },
                "typeOrder": {
                    "problem": false,
                    "consumables": true
                },
                "description": {
                    "title": "oil change",
                    "text": "5w-30 oil castrol",
                    "photos": []
                },
                "carInfo": {
                    "brandModel": "Lada Niva",
                    "productDate": "2000 April",
                    "engine": "gasoline",
                    "km": 353899,
                    "imageUrl": "https://autobild.bg/wp-content/uploads/2017/12/Lada-Niva-729x486-d95dc0a848c502e0.jpg"
                },
                "carAbmissionDate": {
                    "date": "2023-05-01",
                    "hour": "14:30"
                }
            }


        },
        {
            user: { email: 'ivan8@abv.bg', password: '123123', phoneNumber: '089345687', firstLastNames: 'Ivan Petrovich88' },
            data: {
                "user": {
                    "flNames": "Ivan Petrovich88",
                    "email": "ivan8@abv.bg",
                    "phoneNumber": "0123456789"
                },
                "typeOrder": {
                    "problem": false,
                    "consumables": true
                },
                "description": {
                    "title": "Timing belt replacement",
                    "text": "over 50 000 km, time to change",
                    "photos": []
                },
                "carInfo": {
                    "brandModel": "Hyunday Matrix",
                    "productDate": "2002 April",
                    "engine": "gasoline",
                    "km": 156355,
                    "imageUrl": "https://cdn.autotrack.nl/cdn-cgi/image/width=1024/53414012/0-9eedeef66bb6155e33d801299b38d584.jpg"
                },
                "carAbmissionDate": {
                    "date": "2023-05-01",
                    "hour": "14:30"
                }
            }


        },
        {
            user: { email: 'ivan9@abv.bg', password: '123123', phoneNumber: '089345687', firstLastNames: 'Ivan Petrovich99' },
            data: {
                "user": {
                    "flNames": "Ivan Petrovich99",
                    "email": "ivan9@abv.bg",
                    "phoneNumber": "0123456789"
                },
                "typeOrder": {
                    "problem": true,
                    "consumables": true
                },
                "description": {
                    "title": "engine light, less power",
                    "text": "Reduced Engine Power, engine lights on, probably engine cables for change",
                    "photos": [
                        { "link": "https://townsquare.media/site/675/files/2021/02/light.jpg?w=980&q=75" }
                    ]
                },
                "carInfo": {
                    "brandModel": "Honda CRV",
                    "productDate": "1999 december",
                    "engine": "gasoline",
                    "km": 280355,
                    "imageUrl": "https://www.auto-data.net/images/f77/Honda-CR-V-I-RD.jpg"
                },
                "carAbmissionDate": {
                    "date": "2023-05-01",
                    "hour": "14:30"
                }
            }


        },
        {
            user: { email: 'ivan10@abv.bg', password: '123123', phoneNumber: '089345687', firstLastNames: 'Ivan Petrovich10' },
            data: {
                "user": {
                    "flNames": "Ivan Petrovich10",
                    "email": "ivan10@abv.bg",
                    "phoneNumber": "0123456789"
                },
                "typeOrder": {
                    "problem": true,
                    "consumables": true
                },
                "description": {
                    "title": "brakes",
                    "text": "cant stop easy , new pads",
                    "photos": []
                },
                "carInfo": {
                    "brandModel": "peugeot partner",
                    "productDate": "2015 April",
                    "engine": "gasoline",
                    "km": 199355,
                    "imageUrl": "https://cdn3.focus.bg/autodata/i/peugeot/partner/partner/large/47c1f5de802545dbcd3e3504e7c02cdf.jpg"
                },
                "carAbmissionDate": {
                    "date": "2023-05-01",
                    "hour": "14:30"
                }
            }


        },
        {
            user: { email: 'ivan11@abv.bg', password: '123123', phoneNumber: '089345687', firstLastNames: 'Ivan Petrovich1111' },
            data: {
                "user": {
                    "flNames": "Ivan Petrovich1111",
                    "email": "ivan11@abv.bg",
                    "phoneNumber": "0123456789"
                },
                "typeOrder": {
                    "problem": true,
                    "consumables": true
                },
                "description": {
                    "title": "noise at right",
                    "text": "some noise at right. it seems roller change car, or some else, for diagnostic",
                    "photos": []
                },
                "carInfo": {
                    "brandModel": "SEAT CORDOBA",
                    "productDate": "2008 April",
                    "engine": "gasoline",
                    "km": 188355,
                    "imageUrl": "https://mobistatic2.focus.bg/mobile/photosorg/655/1/11652461404435655_rk.jpg"
                },
                "carAbmissionDate": {
                    "date": "2023-05-01",
                    "hour": "14:30"
                }
            }


        },

    ]


    return exData;


}



/* 
 "typeOrder": {
            "problem": true,
            "consumables": true
        },
        "description": {
            "title": "qwerqwe",
            "text": "qwerqwe",
            "photos": [
                {
                    "link": "qwerqwer"
                },
                {
                    "link": "qwerqwer"
                }
            ]
        },
        "carInfo": {
            "brandModel": "Toyota Corola",
            "productDate": "2023-04-12",
            "engine": "ethanolE85",
            "km": "123456",
            "imageUrl": "sdfgsdfgdsf"
        },
        "user": {
            "flNames": "Dimitar Petkov1321",
            "email": "mitko77@abv.bg",
            "phoneNumber": "0123456789"
        },
        "carAbmissionDate": {
            "date": "2023-04-11",
            "hour": "14:30"
        }

*/

