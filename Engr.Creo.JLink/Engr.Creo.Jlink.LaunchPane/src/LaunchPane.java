import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import com.ptc.cipjava.jxthrowable;
import com.ptc.pfc.pfcGlobal.*;
import com.ptc.pfc.pfcSession.*;

public class LaunchPane {

    public static void start() throws jxthrowable, IOException {


            Session session = pfcGlobal.GetProESession();
            Properties prop = new Properties();
            String propFileName = "LaunchPane.properties";
            InputStream inputStream = LaunchPane.class.getClassLoader().getResourceAsStream(propFileName);

            prop.load(inputStream);
            if (inputStream == null) {
                throw new FileNotFoundException("property file '" + propFileName + "' not found in the classpath");
            }
            String icon = prop.getProperty("icon");
            session.UIShowMessageDialog(icon,null);
            if (icon != null && icon.isEmpty()) icon = null;
            session.NavigatorPaneBrowserAdd(prop.getProperty("name"), icon, prop.getProperty("url"));
    }

    public static void stop() {

    }
}