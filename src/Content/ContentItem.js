import React from 'react'
import {Box, Typography} from '@mui/material'


const ContentItem = ({title, description, img}) => {
  return (
    <Box padding={10} justifyContent={'center'} alignItems={'center'}>
      <Box>
        <Typography color='#734950' padding={3} variant='h3'>
          {title}
        </Typography>
        <Typography variant='caption' padding={3}>{description}</Typography>
      </Box>
    </Box>
  )
}

export default ContentItem