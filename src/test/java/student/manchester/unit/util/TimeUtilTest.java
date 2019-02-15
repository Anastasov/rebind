package student.manchester.unit.util;

import org.junit.Before;
import org.junit.Test;
import student.manchester.util.TimeUtil;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import static org.junit.Assert.assertTrue;
import static student.manchester.util.AssertUtil.assertExceptionIsThrown;

/**
 * @author Anastas Anastasov
 * on 1/30/2019.
 */
public class TimeUtilTest {

    private static Calendar calendar;

    @Before
    public void beforeEachTest() {
        calendar = Calendar.getInstance();
    }

    @Test
    public void nextHours() {
        // Happy paths ------------------------------------------------
        final String after = "3h";
        final Runnable addAfter = () -> calendar.add(Calendar.HOUR, 3);
        assertExpectedNextDateIsReturned(calendar, after, addAfter);

        // odd timing
        calendar.set(Calendar.HOUR_OF_DAY, 23);
        assertExpectedNextDateIsReturned(calendar, after, addAfter);

        // Sad paths --------------------------------------------------
        assertExceptionIsThrown(() -> TimeUtil.next("-1h"));
        assertExceptionIsThrown(() -> TimeUtil.next("0h"));
        assertExceptionIsThrown(() -> TimeUtil.next("0"));
        assertExceptionIsThrown(() -> TimeUtil.next("1"));
        assertExceptionIsThrown(() -> TimeUtil.next("-1"));
        assertExceptionIsThrown(() -> TimeUtil.next("-1 30m 40s"));
    }

    @Test
    public void nextMinutes() {
        // Happy paths ------------------------------------------------
        final String after = "30m";
        final Runnable addAfter = () -> calendar.add(Calendar.MINUTE, 30);
        assertExpectedNextDateIsReturned(calendar, after, addAfter);

        // odd timing
        calendar.set(Calendar.HOUR_OF_DAY, 23);
        calendar.set(Calendar.MINUTE, 30);
        assertExpectedNextDateIsReturned(calendar, after, addAfter);

        calendar.set(Calendar.MINUTE, 59);
        assertExpectedNextDateIsReturned(calendar, after, addAfter);

        // Sad paths --------------------------------------------------
        assertExceptionIsThrown(() -> TimeUtil.next("-1m"));
        assertExceptionIsThrown(() -> TimeUtil.next("0m"));
        assertExceptionIsThrown(() -> TimeUtil.next("1h 0"));
        assertExceptionIsThrown(() -> TimeUtil.next("1h -1"));
        assertExceptionIsThrown(() -> TimeUtil.next("1h 30 40s"));
    }

    @Test
    public void nextSeconds() {
        // Happy paths ------------------------------------------------
        final String after = "30s";
        final Runnable addAfter = () -> calendar.add(Calendar.SECOND, 30);
        assertExpectedNextDateIsReturned(calendar, after, addAfter);

        // odd timing
        calendar.set(Calendar.HOUR_OF_DAY, 23);
        calendar.set(Calendar.SECOND, 30);
        assertExpectedNextDateIsReturned(calendar, after, addAfter);

        calendar.set(Calendar.SECOND, 59);
        assertExpectedNextDateIsReturned(calendar, after, addAfter);

        // Sad paths --------------------------------------------------
        assertExceptionIsThrown(() -> TimeUtil.next("-1s"));
        assertExceptionIsThrown(() -> TimeUtil.next("0s"));
        assertExceptionIsThrown(() -> TimeUtil.next("1h 30m 30"));
        assertExceptionIsThrown(() -> TimeUtil.next("1h 20m -1s"));
    }

    @Test
    public void nextDays() {
        // Happy paths ------------------------------------------------
        final String after = "2d";
        final Runnable addAfter = () -> calendar.add(Calendar.DAY_OF_YEAR, 2);
        assertExpectedNextDateIsReturned(calendar, after, addAfter);

        // odd timing
        calendar.set(Calendar.DAY_OF_YEAR, 365);
        assertExpectedNextDateIsReturned(calendar, after, addAfter);

        calendar.set(Calendar.MONTH, 1);
        calendar.set(Calendar.DAY_OF_MONTH, 29);
        assertExpectedNextDateIsReturned(calendar, after, addAfter);

        calendar.set(Calendar.DAY_OF_MONTH, 31);
        assertExpectedNextDateIsReturned(calendar, after, addAfter);

        // Sad paths --------------------------------------------------
        assertExceptionIsThrown(() -> TimeUtil.next("-1d"));
        assertExceptionIsThrown(() -> TimeUtil.next("0d"));
        assertExceptionIsThrown(() -> TimeUtil.next("0d 1h 30m 30s"));
        assertExceptionIsThrown(() -> TimeUtil.next("-1d 1h 30m 30s"));
    }

    @Test
    public void nextDatetime() {
        // Happy paths ------------------------------------------------
        final String after = "2d 1h 3m 46s";
        final Runnable addAfter = () -> {
            calendar.add(Calendar.DAY_OF_YEAR, 2);
            calendar.add(Calendar.HOUR_OF_DAY, 1);
            calendar.add(Calendar.MINUTE, 3);
            calendar.add(Calendar.SECOND, 46);
        };
        assertExpectedNextDateIsReturned(calendar, after, addAfter);

        // odd timing
        calendar.set(Calendar.DAY_OF_YEAR, 365);
        calendar.set(Calendar.HOUR_OF_DAY, 22);
        calendar.set(Calendar.MINUTE, 59);
        assertExpectedNextDateIsReturned(calendar, after, addAfter);

        // Sad paths --------------------------------------------------
        assertExceptionIsThrown(() -> TimeUtil.next(null));
        assertExceptionIsThrown(() -> TimeUtil.next(""));
    }

    private void assertExpectedNextDateIsReturned(final Calendar calendar, final String after, final Runnable when) {
        final Date now = calendar.getTime();
        when.run();
        final Date expectedNextDate = calendar.getTime();
        // reverse change for future tests
        calendar.setTime(now);
        final Date result = TimeUtil.next(now, after);
        assertTrue(formatError(now, after, expectedNextDate, result), expectedNextDate.equals(result));
    }

    private String formatError(final Date now, final String after, final Date expectedNextDate, final Date result) {
        final SimpleDateFormat formatter = new SimpleDateFormat();
        return "After adding " + after + " to " + formatter.format(now)
                + " expected to return " + formatter.format(expectedNextDate)
                + ", but actual result was " + formatter.format(result);
    }

}
