# Outputs the reading time
# Usage: {{ page.content | reading_time }}

module ReadingTimeFilter
    def reading_time(input)
        words_per_minute = 180

        words = input.split.size
        minutes = ( words / words_per_minute ).floor
        minutes > 0 ? "#{minutes} min read" : "<1 min read"
    end
end

Liquid::Template.register_filter(ReadingTimeFilter)
