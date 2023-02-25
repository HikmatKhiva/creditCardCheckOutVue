export const contentSetting = {
    leftInitial: {
        initial: {
            opacity: 0,
            left: '1500px',
        },
        enter: {
            opacity: 1,
            left: '24px'
        }
    },
    rightInitial: {
        initial: {
            opacity: 0,
            right: '1200px',
        },
        enter: {
            opacity: 1,
            right: '0px'
        }
    }
}
export const opacityElement = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1,
        transition: {
            type: 'spring',
        },
    },
}