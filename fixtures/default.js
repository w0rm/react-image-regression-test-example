module.exports = {
    props: {
        wrap: {
            phone: true,
            tablet: true,
            desktop: true
        }
    },
    items: [
        {
            props: {
                span: {
                    phone: 12,
                    tablet: 6,
                    desktop: 3
                }
            },
            placeholder: {
                style: {
                    height: 130,
                    background: 'red',
                    color: 'white'
                },
                children: '#1'
            }
        },
        {
            props: {
                span: {
                    phone: 12,
                    tablet: 6,
                    desktop: 3
                }
            },
            placeholder: {
                style: {
                    height: 100,
                    background: 'blue',
                    color: 'white'
                },
                children: '#2'
            }
        },
        {
            props: {
                span: {
                    phone: 12,
                    tablet: 6,
                    desktop: 3
                }
            },
            placeholder: {
                style: {
                    height: 110,
                    background: 'green',
                    color: 'white'
                },
                children: '#3'
            }
        },
        {
            props: {
                span: {
                    phone: 12,
                    tablet: 6,
                    desktop: 3
                }
            },
            placeholder: {
                style: {
                    height: 100,
                    background: 'purple',
                    color: 'white'
                },
                children: '#4'
            }
        }
    ]
};
