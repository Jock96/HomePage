import React, { FC } from 'react';
import { StylesExtension } from '../../interfaces';
import { GlitchSpan } from './styles';

/** Обёртка для глитч эффекта */
const GlitchWrapper: FC<StylesExtension> = (props) => {
    const { children, useGlitch } = props;
    return useGlitch ? (
        <>
            <GlitchSpan aria-hidden={true}>{children}</GlitchSpan>
            <>{children}</>
            <GlitchSpan aria-hidden={true}>{children}</GlitchSpan>
        </>
    ) : (<>{children}</>);
}

export default GlitchWrapper;