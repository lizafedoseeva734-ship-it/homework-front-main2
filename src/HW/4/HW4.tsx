import { useState } from 'react';
import { Button } from './Button';
import s from './HW4.module.css';
import { Input } from './Input';

export const HW4 = () => {
    const [currentText, setCurrentText] = useState('');
    const [texts, setTexts] = useState<string[]>([]);

    const handleSave = () => {
        if (currentText.trim()) {
            setTexts([currentText, ...texts]);
            setCurrentText('');
        }
    };

    return (
        <div id={'hw04'}>
            {texts.length === 0 && !currentText ? (
                <h1 id={'hw04-default-text'}>Здесь появится новое дело</h1>
            ) : (
                currentText && <h1 id={'hw04-text'}>{currentText}</h1>
            )}

            <Input currentText={currentText} setCurrentText={setCurrentText} />

            <Button
                callBack={handleSave}
                name={'Сохранить'}
                id={'hw04-save-btn'}
            />

            <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

            {texts.length > 0 && (
                <ol id={'hw04-tasks'}>
                    {texts.map((el, index) => {
                        return (
                            <li
                                key={index}
                                id={`hw04-task-${index}`}
                                className={index % 2 === 0 ? s.chet : s.nechet}
                            >
                                {el}
                            </li>
                        );
                    })}
                </ol>
            )}
        </div>
    );
};
