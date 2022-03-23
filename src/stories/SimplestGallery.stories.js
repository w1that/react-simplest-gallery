import React, {useState} from 'react'
import { storiesOf } from '@storybook/react'

import {SimplestGallery} from '../components/SimplestGallery'

const stories = storiesOf('App test', module);

stories.add('App', ()=>{

    return <SimplestGallery images={["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY="]}  />
})