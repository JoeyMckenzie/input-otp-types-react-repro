import { OTPInputContext } from 'input-otp';
import { useContext } from 'react';

export function Slot({ index }: { index: number }) {
    const { char } = useContext(OTPInputContext).slots[index];

    return <div>{char}</div>;
}
