import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

export default function ResidenciesCard({ data }) {
  // Destructure the 'data' directly from the props parameter
  console.log(data);

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 200,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
      className="residencies-card"
    >
      <CardOverflow style={{ padding: "20px 25px" }}>
        <AspectRatio>
          {/* Use a relative path for the image source */}
          <img className='img' src={data.image} alt="" loading="lazy" />
        </AspectRatio>
      </CardOverflow>

      <CardContent>
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          fontWeight="lg"
          textColor="text.primary"
        >
          <h2 className='yellow'>$ &nbsp;</h2>
          <h2 className='para'>{data.price}</h2>
        </Link>
        <Typography fontSize="sm">
          <Link
            component="button"
            color="neutral"
            fontWeight="lg"
            textColor="text.primary"
          >
            <h2 className='dark-blue'>{data.name}</h2>
          </Link>{' '}
          <br />
          <span className='para'>{data.detail}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}
