module.exports = {
    skip: {
        browserName: 'internet explorer',
        version: '9.0'
    },
    items: [
        {
            props: {
                span: 3,
                order: {
                    phone: 4,
                    tablet: 2,
                    desktop: 1
                }
            },
            placeholder: {
                style: {
                    height: 130,
                    background: 'red',
                    color: 'white'
                },
                children: '#1 desktop, #2 tablet, #4 phone'
            }
        },
        {
            props: {
                span: 3,
                order: {
                    phone: 3,
                    tablet: 4,
                    desktop: 2
                }
            },
            placeholder: {
                style: {
                    height: 100,
                    background: 'blue',
                    color: 'white'
                },
                children: '#2 desktop, #4 tablet, #3 phone'
            }
        },
        {
            props: {
                span: 3,
                order: {
                    phone: 2,
                    tablet: 1,
                    desktop: 3
                }
            },
            placeholder: {
                style: {
                    height: 110,
                    background: 'green',
                    color: 'white'
                },
                children: '#3 desktop, #1 tablet, #2 phone'
            }
        },
        {
            props: {
                span: 3,
                order: {
                    phone: 1,
                    tablet: 3,
                    desktop: 4
                }
            },
            placeholder: {
                style: {
                    height: 100,
                    background: 'purple',
                    color: 'white'
                },
                children: '#4 desktop, #3 tablet, #1 phone'
            }
        }
    ]
};
