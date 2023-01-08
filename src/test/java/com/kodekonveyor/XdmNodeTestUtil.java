package com.kodekonveyor;

import lombok.SneakyThrows;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.XdmNode;

import javax.xml.transform.stream.StreamSource;
import java.io.StringReader;

public class XdmNodeTestUtil {

    private static final Processor processor = new Processor(false);

    @SneakyThrows
    public static XdmNode convertToXdmNode(final String xml) {
        return processor.newDocumentBuilder()
                .build(new StreamSource(new StringReader(xml)));
    }

    public static Processor getTestProcessor(){
        return processor;
    }
}
