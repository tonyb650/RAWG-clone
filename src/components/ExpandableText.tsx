import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  text?: string
}

const ExpandableText = ({text}: Props) => {
  const [isTruncated, setTruncated] = useState(true);
  const limit = 300
  
  if (!text) return null
  
  if (text?.length <= limit) return <Text>{text}</Text>
  
  const summary = text.slice(0,limit)

  return (
    <Text>{isTruncated ? summary + "...": text }
      <Button marginLeft={2} size='xs' fontWeight='bold' colorScheme="yellow" onClick={() => setTruncated(!isTruncated)}>{ isTruncated ? "Show More": "Show Less"}</Button>
    </Text>
  )
}

export default ExpandableText