import { renderHook, act } from '@testing-library/react-hooks';
import useSwiper from '../hooks/useSwiper';

describe('useSwipe', () => {
    test('useSwipe init', () => {
        const { result } = renderHook(() => useSwiper());
        
    })
})