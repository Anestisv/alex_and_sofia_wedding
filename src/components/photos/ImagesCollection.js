import * as images from '../../assets/gallery/index';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useIsMobile } from "../../assets/design/theme";


export const ImagesCollection = () => {

    const isMobile = useIsMobile();

    return (
        isMobile ? <MobileLayout /> : <DesktopLayout /> 
    );
}

function srcset( image, size, rows = 1, cols = 1 ) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}


const MobileLayout = () => {
    return(
        <ImageList
            sx={{ width: '100%', height: 'auto', margin: 0}}
            variant="quilted"
            cols={4}
            rowHeight={'auto'}
            gap={15}
        >
            {mobileData.map( ( item ) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset( item.img, item.rows, item.cols )}
                        alt={'happy couple'}
                        loading="lazy"
                    />
                </ImageListItem>
            ) )}
        </ImageList>
    )
}


const DesktopLayout = () => {
    return(
        <ImageList
            sx={{ width: '100%', height: 'auto', margin: 0}}
            variant="quilted"
            cols={6}
            rowHeight={'auto'}
            gap={20}
        >
            {itemData.map( ( item ) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset( item.img, item.rows, item.cols )}
                        alt={'happy couple'}
                        loading="lazy"
                    />
                </ImageListItem>
            ) )}
        </ImageList>
    )
}


const itemData = [
    {
        img: images.image1,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image4,
        rows: 4,
        cols: 2,
    },
    {
        img: images.image5,
        rows: 4,
        cols: 2,
    },
    {
        img: images.image2,
        rows: 1,
        cols: 1,
    },
    {
        img: images.image3,
        rows: 1,
        cols: 1,
    },
    {
        img: images.image6,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image8,
        rows: 4,
        cols: 2,
    },
    {
        img: images.image9,
        rows: 2,
        cols: 2,
    },
    {
        img: images.image10,
        rows: 2,
        cols: 1,
    },
    {
        img: images.image11,
        rows: 2,
        cols: 1,
    },
    {
        img: images.image7,
        rows: 1,
        cols: 2,
    },
    {
        img: images.image12,
        rows: 4,
        cols: 2,
    },
    {
        img: images.image13,
        rows: 2,
        cols: 1,
    },
    {
        img: images.image14,
        rows: 2,
        cols: 1,
    },
    {
        img: images.image16,
        rows: 4,
        cols: 2,
    },
    {
        img: images.image15,
        rows: 2,
        cols: 2,
    },
    {
        img: images.image17,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image18,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image19,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image20,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image21,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image22,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image23,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image24,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image25,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image26,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image27,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image28,
        rows: 2,
        cols: 1,
    },
    {
        img: images.image29,
        rows: 2,
        cols: 1,
    },
    {
        img: images.image31,
        rows: 4,
        cols: 2,
    },
    {
        img: images.image32,
        rows: 4,
        cols: 2,
    },
    {
        img: images.image30,
        rows: 2,
        cols: 2,
    },
    {
        img: images.FamilyImage,
        rows: 4,
        cols: 6,
    },
]

const mobileData = [
    {
        img: images.image1,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image4,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image2,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image5,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image3,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image6,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image8,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image9,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image10,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image11,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image7,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image12,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image13,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image14,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image16,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image15,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image17,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image18,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image19,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image20,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image21,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image22,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image23,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image24,
        rows: 3,
        cols: 2,
    },
    {
        img: images.image25,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image26,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image27,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image28,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image29,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image31,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image32,
        rows: 3,
        cols: 4,
    },
    {
        img: images.image30,
        rows: 3,
        cols: 4,
    },
    {
        img: images.FamilyImage,
        rows: 3,
        cols: 4,
    },
]