import { 
        View , 
        FlatList, 
        Image, 
        useWindowDimensions, 
        Text , 
        Pressable ,
        StyleSheet} from 'react-native'
import React from 'react'
import Animated, { useAnimatedScrollHandler, useSharedValue , SharedValue , useAnimatedStyle , interpolate , FadeIn, FadeOut} from 'react-native-reanimated'

import { BlurView } from 'expo-blur';
export default function Autocarousel() {
  // This are varibles for the height and width of the image
    const width = useWindowDimensions().width

    // This are the properties for the widths and height
      const _imageWidth = width * 0.7;
      const _imageHeight = _imageWidth * 1.76;

      // Gap spacing for the images since it's horizontal
      const _spacing = 12;

      // For the buttton to appear
       const [button , showButton] = React.useState(false)


      type item = any;

      const datai = [
          {i: require("@/assets/images/carouselimg/carouselautoi.jpg") , id: 1},
          {i: require("@/assets/images/carouselimg/carouselautoii.jpg") , id: 2},
          {i: require("@/assets/images/carouselimg/carouselautoiii.jpg") , id: 3},
          {i: require("@/assets/images/carouselimg/carouselautoiv.jpg") , id: 4}
      ]

  // This is for the auto-Scroll
     const flatListRef = React.useRef<FlatList<item>>(null);
     const [currentIndex, setCurrentIndex] = React.useState(0);


      React.useEffect(() => {
        const interval = setInterval(() => {
          if (flatListRef.current) {
            if (currentIndex  < datai.length - 1) {
              setCurrentIndex(prevIndex => prevIndex + 1);
              flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true})
            } else {
              clearInterval(interval);
              showButton(true)
            }
          }

          return () => clearInterval(interval);

      }, 2000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);



    const BackdropImages =(
      { items , index , scrollX }:{items : item , index: number , scrollX: SharedValue<number>})=>{

        // For the animated stylez 
        const stylez = useAnimatedStyle(()=>{
          return{
            opacity: interpolate(
              scrollX.value , 
              [index -1 ,index, index + 1] , 
              [0 , 1 ,0] ,
            )
          }
        })

      return(
        <BlurView intensity={80} tint='dark'>
          <Animated.Image 
            source={items.i}
            style ={[StyleSheet.absoluteFillObject , stylez]}
            blurRadius={50}
          />
        </BlurView>
      )
    }

    // This is the render for the Flatlist
    const renderItems = (
      {item , index , scrollX }:
      {
        item:item , 
        index: number , 
        scrollX: SharedValue<number> 
      }
    ) => {

        return(
          <View
          className={'flex-1 overflow-hidden rounded-xl'}
          style={{
            width: _imageWidth,
            height: _imageHeight
          }}
          >
              <Animated.Image 
                source={item.i}
                className='flex-1'
                style={{flex:1 }}
              />
          </View>
        )
    }

    // For the smooth animation in the sliding
    const scrollX = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler((e) =>{
      //  Giving the exact position the picture index are
      scrollX.value = e.contentOffset.x / (_imageWidth + _spacing)
      // Show button if at the last item
      // if (scrollX.value >= datai.length - 1) {
      //   showButton(true);
      // } else {
      //   showButton(false);
      // }

    })
  return (
    <View className='justify-center items-center bg-white' style={{flex: 1}}>
      <View
        style ={StyleSheet.absoluteFillObject}
      >
        {
          datai.map((item , index) =>(
              <BackdropImages items={item} index={index} scrollX={scrollX}/>
            )
          )
        }
      </View>

      <Animated.FlatList 
        ref={flatListRef}
        data={datai}
        renderItem={({ item , index})=>renderItems({item , index , scrollX})}
        keyExtractor={(item, index: number) => index.toString()}
        className={'flex-grow-0'}
        snapToInterval={_imageWidth + _spacing }
        decelerationRate={"fast"}
        contentContainerStyle = {{ 
          gap: _spacing , 
          paddingHorizontal : (40)
        }}
        horizontal = {true}
        onScroll={onScroll}
        scrollEventThrottle={ 1000 / 60 } // 16.6 ms
        showsHorizontalScrollIndicator = {false}
      />

      {/* {showButton && 
        <Button title="Next Step" onPress={() => alert('Button Clicked!')} />
      } */}

      {
        button && 
        <Pressable>
          <Animated.View
            className='bg-blue-600 w-20 h-20 rounded-full items-center justify-center position: absolute top-[60] left-[90]'
            entering={FadeIn.duration(300)}
            exiting={FadeOut.duration(300)}
          >
           <Text
            className='color-white'
           >
              Next
          </Text>
        </Animated.View>
      </Pressable>
      }

    </View>
  )
}
