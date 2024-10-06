import {useLocation} from "react-router-dom";
import {Link} from "../model/links.ts";

interface PageTitleProps {
    links: Link[]; // 定義 props 類型
}
function getPageTitle(pathname: string, links: Link[]): string {
    for (let item of links) {
        if (item.link === pathname) {
            return item.label;
        }
        if (item.child) {
            for (const child of item.child) {
                if (child.link === pathname) {
                    return child.label;
                }
            }
        }
    }
    return '';
}

const PageTitle: React.FC<PageTitleProps> = ({ links }) => {
    const location = useLocation();
    const pageTitle = getPageTitle(location.pathname, links);

    return (
            <div
                style={{
                    color: '#1488df',
                    fontWeight: '800'
                }}
            >{pageTitle}</div>
    );
}

export default PageTitle;
