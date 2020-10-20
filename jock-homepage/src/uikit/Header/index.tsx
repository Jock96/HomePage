import React, { FC } from 'react';
import { HeaderProps, HeaderTypes, StylesExtension } from './interfaces';
import GlitchWrapper from './shared/GlitchWrapper';
import { Paragraph, Head1, Head2, Head3, Head4, Head5, Head6 } from './styles';

/** Компонент заголовка */
const Header: FC<HeaderProps> = (props) => {
    const { type, children, useGlitch } = props;

    switch(type){
        case HeaderTypes.Head1:
            return (
                <Head1 useGlitch={useGlitch}>
                    <GlitchWrapper useGlitch={useGlitch}>
                        {children}
                    </GlitchWrapper>
                </Head1>
                );

        case HeaderTypes.Head2:
            return (
                <Head2 useGlitch={useGlitch}>
                    <GlitchWrapper useGlitch={useGlitch}>
                        {children}
                    </GlitchWrapper>
                </Head2>
                );

        case HeaderTypes.Head3:
            return (
                <Head3 useGlitch={useGlitch}>
                    <GlitchWrapper useGlitch={useGlitch}>
                        {children}
                    </GlitchWrapper>
                </Head3>
                );

        case HeaderTypes.Head4:
            return (
                <Head4 useGlitch={useGlitch}>
                    <GlitchWrapper useGlitch={useGlitch}>
                        {children}
                    </GlitchWrapper>
                </Head4>
                );

        case HeaderTypes.Head5:
            return (
                <Head5 useGlitch={useGlitch}>
                    <GlitchWrapper useGlitch={useGlitch}>
                        {children}
                    </GlitchWrapper>
                </Head5>
                );

        case HeaderTypes.Head6:
            return (
                <Head6 useGlitch={useGlitch}>
                    <GlitchWrapper useGlitch={useGlitch}>
                        {children}
                    </GlitchWrapper>
                </Head6>
                );

        case HeaderTypes.Paragraph:
            return (
                <Paragraph useGlitch={useGlitch}>
                    <GlitchWrapper useGlitch={useGlitch}>
                        {children}
                    </GlitchWrapper>
                </Paragraph>
                );

        default: return <>{children}</>;
    }
}

export default Header;