import { renderHook, act } from '@testing-library/react-hooks';
import useTouch from '../hooks/useTouch';

const mockTouchEvent = (x: number, y: number): any => {
    return {
        touches: [
            { clientX: x, clientY: y }
        ]
    }
}

const mockTimeout = (timeout: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('')
        }, timeout);
    })
}

describe('useTouch', () => {
    test('touch init', () => {
        const { result } = renderHook(() => useTouch());
        act(() => {
            const t = result.current.getDelta();
            expect(t.deltaX).toBe(0);
            expect(t.deltaX).toBe(0);
        });
    });

    test('touch', async () => {
        const { result } = renderHook(() => useTouch());

        await act(async () => {
            result.current.start(mockTouchEvent(0, 0));
            await mockTimeout(1000);
            result.current.move(mockTouchEvent(10, 10));
            const { deltaX, deltaY, time } = result.current.end();
            expect(deltaX).toBe(10);
            expect(deltaY).toBe(10);
            expect(time).toBeGreaterThan(0);
        })
    });

    test('touch use error', async () => {
        const { result } = renderHook(() => useTouch());

        await act(async () => {
            result.current.move(mockTouchEvent(10, 10));
            await mockTimeout(1000);
            const { deltaX, deltaY, time } = result.current.end();
            expect(deltaX).toBe(0);
            expect(deltaY).toBe(0);
            expect(time).toBe(0);
        })
    })
})