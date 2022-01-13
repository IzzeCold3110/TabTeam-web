import * as SvgIconsComponent from '../pages/components/svgs'

export const getIconComponentByName = (name) => {
    const ComponentsMap = {
        facebook: SvgIconsComponent.Facebook,
        instagram: SvgIconsComponent.Instagram,
        twitter: SvgIconsComponent.Twitter,
        linkedin: SvgIconsComponent.LinkedIn
    }

    if ( name in ComponentsMap ) {
        const IconComponent = ComponentsMap[name];
        return <IconComponent/>
    } else {
        return null;
    }
}