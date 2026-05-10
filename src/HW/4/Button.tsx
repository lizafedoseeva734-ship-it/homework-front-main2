type ButtonPropsType = {
    callBack: () => void;
    name: string;
    id?: string;
};

export const Button = (props: ButtonPropsType) => {
    const callBackHandler = () => {
        props.callBack();
    };

    return (
        <button id={props.id || 'hw04-button'} onClick={callBackHandler}>
            {props.name}
        </button>
    );
};
