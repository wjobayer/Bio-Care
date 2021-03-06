const services = [
    {
    key:1,
    service_name:'Children Care',
    description:'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.',
    img:'https://media.istockphoto.com/photos/mother-doing-home-schooling-with-child-while-wearing-surgical-face-picture-id1276648197?b=1&k=20&m=1276648197&s=170667a&w=0&h=T8y8VrF7sis81727AufS-OfOyZE0Q_hN_w7ivQk_0GI='

    },
    {
    key:2,
    service_name:'Dental Care',
    description:'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.',
    img:'https://media.istockphoto.com/photos/female-patient-at-ental-clinic-picture-id1296011740?b=1&k=20&m=1296011740&s=170667a&w=0&h=pI1qQPBg9QWcm1no918GPDYt1kr8XvIlBqZ9MI0QdoI='

    },
    {
    key:3,
    service_name:'Mental Care',
    description:'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.',
    img:'https://media.istockphoto.com/photos/mental-health-matters-motivational-quote-on-the-letter-board-text-picture-id1307052182?b=1&k=20&m=1307052182&s=170667a&w=0&h=2QclCUuNAicP20FB0E6-EfxwW3LUadY9J6r8HZGCN8Q='

    },
    {
    key:4,
    service_name:'Flu/Vaccination Program',
    description:'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.',
    img:'https://media.istockphoto.com/photos/vaccination-of-senior-person-in-hospital-picture-id1266812038?b=1&k=20&m=1266812038&s=170667a&w=0&h=PZWRkfsjkoqxxClT0CMBHBaTSPPRQF6x_IxySJt9hds='

    },
    {
    key:5,
    service_name:'Patient Exercising',
    description:'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.',
    img:'https://media.istockphoto.com/photos/nurse-and-male-patient-exercising-picture-id1280119885?b=1&k=20&m=1280119885&s=170667a&w=0&h=k_oX1Qp-nyrysfvnqffMO9rfeulZmdNytZi6sKEn_oA='

    },
    {
    key:6,
    service_name:'Pharmacy',
    description:'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.',
    img:'https://media.istockphoto.com/photos/middle-eastern-male-pharmacist-scanning-barcode-picture-id1271046151?b=1&k=20&m=1271046151&s=170667a&w=0&h=VjTmdOFG5vpNlWOAdi4Hz32gBdc8-YlR5CqZSxhilJk='

    },
    {
    key:7,
    service_name:'Surgery',
    description:'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.',
    img:'https://media.istockphoto.com/photos/operating-room-doctor-or-surgeon-anatomy-on-advanced-robotic-surgery-picture-id1315129854?b=1&k=20&m=1315129854&s=170667a&w=0&h=nHq7TBhgyNjFZyp8DjDdRBukevySdMtm4yIGDZLWo44='

    },
    {
    key:8,
    service_name:'Health CheckUp',
    description:'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.',
    img:'https://media.istockphoto.com/photos/ensuring-her-vitals-are-nominal-before-the-procedure-picture-id175264754?b=1&k=20&m=175264754&s=170667a&w=0&h=aCiBfeBoIuCDLQ0DR0nIto6IAV8ZSg2eMYy3tvN6VHs='

    },
    {
    key:9,
    service_name:'Hairing Solution',
    description:'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.',
    img:'https://media.istockphoto.com/photos/close-up-of-a-doctor-checking-the-ear-of-his-male-patient-picture-id1310935018?b=1&k=20&m=1310935018&s=170667a&w=0&h=yGpK_7veETSKAB6iSI8iFpsVXmfu0648rEjq-61qat4='

    },
    {
    key:10,
    service_name:'Eye Vision',
    description:'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.',
    img:'https://media.istockphoto.com/photos/optometrist-examing-patients-eyes-picture-id1273513939?b=1&k=20&m=1273513939&s=170667a&w=0&h=ACdWv2W6-Hxw3coR495VsKdngTJ32C3iBVyvpdBroYo='

    },
    {
    key:11,
    service_name:'Reproduction Care',
    description:'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.',
    img:'https://media.istockphoto.com/photos/light-blue-awareness-ribbon-picture-id1324428642?b=1&k=20&m=1324428642&s=170667a&w=0&h=ZCN7RH_QGvoClfem1GywnDYQCAUP3dKOY-c6dlGspqU='

    },
    {
    key:12,
    service_name:'Urgent Care',
    description:'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.',
    img:'https://media.istockphoto.com/photos/hospital-emergency-department-entrance-picture-id522421831?b=1&k=20&m=522421831&s=170667a&w=0&h=4a5ovy42Ropr-68BVyrjiyyWT5yS1zgDB_EdYUaLAHk='

    }

]