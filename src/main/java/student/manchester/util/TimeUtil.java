package student.manchester.util;

import student.manchester.service.exception.LogicException;

import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

/**
 * @author Anastas Anastasov
 * on 10/20/2018.
 */
public final class TimeUtil {

    private TimeUtil() {
        // private ctor
    }

    /**
     * A method that takes time in the form a string, formatted:
     *      00h 00m 00s
     * and returns a date that adds this time from now.
     *
     * @param time
     * @return
     */
    public final static Date next(final String time) {
        return next(Calendar.getInstance(TimeZone.getTimeZone("UTC")).getTime(), time);
    }

    /**
     * A method that takes time in the form a string, formatted:
     *      00h 00m 00s
     * and returns a date that adds this time to the start date.
     *
     * @param time
     * @return
     */
    public final static Date next(final Date start, final String time) {
        checkFormatCorrectness(time);
        final String normalized = normalize(time);
        final String[] dimensions = getDimensions(normalized);
        final Calendar after = Calendar.getInstance(TimeZone.getTimeZone("UTC"));
        if(start != null) {
            after.setTime(start);
        }
        for(final String dimension : dimensions) {
            addTime(after, dimension);
        }
        return after.getTime();
    }

    private static void addTime(final Calendar time, final String dimension) {
        final int scaleIndex = dimension.length() - 1;
        final String scaleLetter = dimension.substring(scaleIndex);
        int amount = getAmount(dimension, scaleIndex, scaleLetter);
        final int scale;
        switch (scaleLetter) {
            case "d": scale = Calendar.DAY_OF_YEAR; break;
            case "h": scale = Calendar.HOUR; break;
            case "m": scale = Calendar.MINUTE; break;
            case "s": scale = Calendar.SECOND; break;
            default: scale = Calendar.MILLISECOND; break;
        }
        time.add(scale, amount);
    }

    private static String[] getDimensions(final String normalized) {
        final String[] dimensionAmounts = normalized.split("[a-z]");
        int readInputLength = 0;

        for(int index = 0; index < dimensionAmounts.length; index++) {
            final String amount = dimensionAmounts[index];
            // account for added dimension letter as well
            readInputLength += amount.length();
            dimensionAmounts[index] = amount + normalized.charAt(readInputLength);
            readInputLength++;
        }
        return dimensionAmounts;
    }

    private static String normalize(final String time) {
        return time.replaceAll("\\s+","").toLowerCase();
    }

    private static void checkFormatCorrectness(final String time) {
        final String[] dimensions = time.split("\\s+");
        for(final String dimension : dimensions) {
            if(!dimension.contains("d") && !dimension.contains("h")
                    && !dimension.contains("m") && !dimension.contains("s")) {
                throw new LogicException("Time should be formatted as: []d []h []m []s\n"
                        + "e.g.: 3d 5h 30m 10s");
            }
        }
    }

    private static int getAmount(final String dimension, final int scaleIndex, final String scaleLetter) {
        int amount = Integer.valueOf(dimension.substring(0, scaleIndex));
        if(amount <= 0) {
            throw new LogicException("Expecting to get a positive amount for " + scaleLetter);
        }
        return amount;
    }
}
