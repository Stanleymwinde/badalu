import { Box } from "@chakra-ui/react";

const Map = () => {
  return (
    <Box h="100%">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.566993154295!2d36.75359521396551!3d-1.3049793952323412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a5b6b967303%3A0x4775199e1b585ee6!2sNairobi%20Chapel!5e0!3m2!1sen!2ske!4v1701680098087!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default Map;
