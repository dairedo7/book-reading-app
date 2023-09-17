import { BtnList, BtnItem, EnterLink, RegisterLink } from './MobLinks.styled';

const MobLinks = () => {
    return (
        <BtnList>
            <BtnItem>
                <EnterLink to={'/signin'} variant={'transparent'}>
                    Sign in
                </EnterLink>
            </BtnItem>
            <BtnItem>
                <RegisterLink to={'/signup'} variant={'accent'}>
                    Sign up
                </RegisterLink>
            </BtnItem>
        </BtnList>
    );
};

export default MobLinks;
