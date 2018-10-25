package student.manchester.util;

import java.util.Calendar;
import java.util.Date;

/**
 * @author Anastas Anastasov
 * on 10/20/2018.
 */
public final class TimeUtil {

    private TimeUtil() {
        // private ctor
    }

    public final static Date next(final String time) {
        final String normalized = normalize(time);
        final String[] dimensions = getDimensions(normalized);
        final Calendar after = Calendar.getInstance();
        for(final String dimension : dimensions) {
            addTime(after, dimension);
        }
        return after.getTime();
    }

    private static void addTime(final Calendar time, final String dimension) {
        final int scaleIndex = dimension.length() - 1;
        final String scaleLetter = dimension.substring(scaleIndex);
        int amount = Integer.valueOf(dimension.substring(0, scaleIndex));
        final int scale;
        switch (scaleLetter) {
            case "h": scale = Calendar.HOUR; break;
            case "m": scale = Calendar.MINUTE; break;
            case "s": scale = Calendar.SECOND; break;
            default: scale = Calendar.MILLISECOND; break;
        }

        amount = scaleLetter.equals("d") ? amount * 24 : amount;
        time.add(scale, amount);
    }

    private static String[] getDimensions(final String normalized) {
        final String[] dimensionAmounts = normalized.split("[a-z]");
        int length = 0;

        for(int index = 0; index < dimensionAmounts.length; index++) {
            final String amount = dimensionAmounts[index];
            length += amount.length();
            dimensionAmounts[index] = amount + normalized.charAt(length);
            index++;
        }
        return dimensionAmounts;
    }

    private static String normalize(final String time) {
        return time.trim().toLowerCase();
    }
}
